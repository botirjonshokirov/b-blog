import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Botirjon Shokirov
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/portfolio">
          Portfolio
        </Button>
        <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button>
      </Toolbar>
    </div>
  );
};

export default Navbar;
