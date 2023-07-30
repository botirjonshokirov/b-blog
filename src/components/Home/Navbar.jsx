import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Button } from "@mui/material";

import bshLogo from "../../images/bsh-logo.png";

const Navbar = () => {
  return (
    <div>
      <Toolbar>
        <div style={{ flexGrow: 1, width: "300px" }}>
          <img
            src={bshLogo}
            alt="Botirjon Shokirov"
            style={{
              width: "100%",
              maxWidth: "200px",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          />
        </div>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {/* <Button color="inherit" component={Link} to="/portfolio">
          Portfolio
        </Button> */}
        <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        {/* <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button> */}
      </Toolbar>
    </div>
  );
};

export default Navbar;
