import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";

const AddProjectForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [github, setGithub] = useState("");
  const [demo, setDemo] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleGithubChange = (event) => {
    setGithub(event.target.value);
  };

  const handleDemoChange = (event) => {
    setDemo(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("github", github);
      formData.append("demo", demo);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/projects`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Project created successfully");
        // Reset the form fields after successful submission
        setImage(null);
        setTitle("");
        setGithub("");
        setDemo("");
      } else {
        console.log("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create New Project
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={handleTitleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Github Link"
        value={github}
        onChange={handleGithubChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Demo Link"
        value={demo}
        onChange={handleDemoChange}
        fullWidth
        margin="normal"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: "1rem" }}
      />
      <Button type="submit" variant="contained" color="primary">
        Create Project
      </Button>
    </form>
  );
};

export default AddProjectForm;
