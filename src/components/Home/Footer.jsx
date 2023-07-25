import React from "react";
import { Box, Typography } from "@mui/material";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        paddingTop: "2rem",
        backgroundColor: "#f5f5f5",
        padding: "1rem",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
        zIndex: 9999, // Adjust the z-index value if needed
      }}
    >
      <div className="footer__socials">
        <a href="https://www.facebook.com/botirjonshokir/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/_botirjonshokirov_/">
          <FiInstagram />
        </a>

        <a href="https://github.com/botirjonshokirov">
          <FiGithub />
        </a>
        <a href="https://twitter.com/BotirjonShokir2">
          <IoLogoTwitter />
        </a>
      </div>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} B-Blog. All rights reserved. Developed
        by ❤️ Botirjon Shokirov
      </Typography>
    </Box>
  );
};

export default Footer;
