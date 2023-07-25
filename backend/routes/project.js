// backend/routes/projects.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const Portfolio = require("../models/Portfolio");

// Create a storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets"); // Save the uploaded image to the 'public/assets' folder
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${path.extname(file.originalname)}`;
    cb(null, uniqueName); // Rename the uploaded image with a unique name
  },
});

const upload = multer({ storage });

// Route to post a new project with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, github, demo } = req.body;
    const image = req.file.filename; // The unique name of the uploaded image

    // Create a new project object with image name and other data
    const newProject = new Portfolio({ image, title, github, demo });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (err) {
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
