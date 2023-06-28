const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

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

module.exports = router;
