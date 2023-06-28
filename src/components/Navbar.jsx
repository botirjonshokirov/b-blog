import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          B-Blog
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button>
        <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
