import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} B-Blog. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
