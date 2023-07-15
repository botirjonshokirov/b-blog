import React from "react";
import { Box, Typography } from "@mui/material";

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
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} B-Blog. All rights reserved. Developed
        by ❤️ Botirjon Shokirov
      </Typography>
    </Box>
  );
};

export default Footer;
