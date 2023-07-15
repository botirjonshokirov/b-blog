const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve posts" });
  }
});

// Get a single post by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve post" });
  }
});

// Create a new post
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = new Post({ title, content });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Update a post by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, comments, likes } = req.body;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.title = title;
    post.content = content;
    post.comments = comments;
    post.likes = likes;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
});

// Add a comment to a post
router.post("/:id/comments", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content } = req.body;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const newComment = new Comment({
      name,
      content,
    });

    const savedComment = await newComment.save();

    post.comments.push(savedComment._id);

    const updatedPost = await post.save();

    res.json(updatedPost);
  } catch (error) {
    console.error("Error aksdmkdjn");
  }
});

// GET /api/posts/:id/comments
router.get("/:id/comments", async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comments = await Comment.find({ _id: { $in: post.comments } });

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error retrieving comments:", error);
    res.status(500).json({ error: "Failed to retrieve comments" });
  }
});
// Get a single comment by ID
router.get("/:id/comments/:id", async (req, res) => {
  try {
    const commentId = req.params.id;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.json(comment);
  } catch (error) {
    console.error("Error retrieving comment:", error);
    res.status(500).json({ error: "Failed to retrieve comment" });
  }
});

// Increment likes for a post
router.post("/:id/like", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.likes += 1;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to increment likes" });
  }
});

module.exports = router;
