const express = require("express");
const router = express.Router();
// const { v4: uuidv4 } = require("uuid");
const Portfolio = require("../models/Portfolio");
const cloudinary = require("cloudinary").v2;
require("dotenv").config(); // Load environment variables from .env file

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Route to post a new project with image upload
router.post("/", async (req, res) => {
  try {
    const { title, github, demo } = req.body;
    const image = req.body.image; // Assuming the client sends the image data as a base64 string

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(image, {
      folder: "portfolio", // Cloudinary folder where the images will be stored
      resource_type: "auto", // Automatically detect the file type (image/video)
    });

    // Create a new project object with Cloudinary image URL and other data
    const newProject = new Portfolio({
      image: result.secure_url,
      title,
      github,
      demo,
    });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create a new project" });
  }
});

// Route to get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Portfolio.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to get projects" });
  }
});

module.exports = router;
