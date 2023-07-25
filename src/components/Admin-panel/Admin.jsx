import React, { useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddPostForm from "./AddPostForm";
import AddProjectForm from "./AddProjectForm";

const Admin = () => {
  const theme = useTheme();
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);

  const handleAddPostClick = () => {
    setShowAddPost(true);
    setShowAddProject(false);
  };

  const handleAddProjectClick = () => {
    setShowAddProject(true);
    setShowAddPost(false);
  };

  return (
    <Box
      maxWidth="800px"
      margin="0 auto"
      padding={theme.spacing(2)}
      display="flex"
    >
      <Box width="50%" padding={theme.spacing(2)}>
        <Typography variant="h5" component="h2" gutterBottom>
          Admin Panel
        </Typography>
        <Button
          onClick={handleAddPostClick}
          variant="contained"
          color="primary"
          style={{ marginRight: theme.spacing(2) }}
        >
          Add Post
        </Button>
        <Button
          onClick={handleAddProjectClick}
          variant="contained"
          color="primary"
        >
          Add Project
        </Button>
      </Box>
      <Box width="50%" padding={theme.spacing(2)}>
        {showAddPost && <AddPostForm />}
        {showAddProject && <AddProjectForm />}
      </Box>
    </Box>
  );
};

export default Admin;
