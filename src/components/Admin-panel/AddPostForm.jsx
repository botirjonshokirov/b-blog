import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        }
      );

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
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={handleTitleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        value={content}
        onChange={handleContentChange}
        multiline
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Create Post
      </Button>
    </form>
  );
};

export default AddPostForm;
