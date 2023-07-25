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

// Get a single post by slug
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await Post.findOne({ slug: slug });
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

// Update a post by slug
router.put("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, content, comments } = req.body;

    const post = await Post.findOne({ slug: slug });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.title = title;
    post.content = content;
    post.comments = comments;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
});

// Add a comment to a post
router.post("/:slug/comments", async (req, res) => {
  try {
    const { slug } = req.params;
    const { name, content } = req.body;

    const post = await Post.findOne({ slug: slug });
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
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

// GET /api/posts/:slug/comments
router.get("/:slug/comments", async (req, res) => {
  try {
    const slug = req.params.slug;

    const post = await Post.findOne({ slug: slug });
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
router.get("/:slug/comments/:id", async (req, res) => {
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

module.exports = router;
