import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QuillEditor from "./QuillEditor";

const Admin = () => {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        // Reset the form fields
        setTitle("");
        setContent("");
      } else {
        console.log("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Box maxWidth="600px" margin="0 auto" padding={theme.spacing(2)}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
          margin="normal"
        />
        <QuillEditor value={content} onChange={handleContentChange} />
        <Button type="submit" variant="contained" color="primary">
          Create Post
        </Button>
      </form>
    </Box>
  );
};

export default Admin;
