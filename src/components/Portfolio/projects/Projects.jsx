import React, { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@mui/material";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch all projects from the backend API using the environment variable
    fetch(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div sx={{ m: 2 }}>
      <Grid container spacing={2}>
        {projects.map(({ _id, image, title, github, demo }) => (
          <Grid item xs={12} md={4} key={_id}>
            <article>
              <div>
                {/* Use the Cloudinary image URL directly */}
                <img
                  src={image} // Use the Cloudinary image URL
                  alt={title}
                  style={{
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    width: "100%",
                    height: "200px",
                  }}
                />
              </div>
              <Typography
                variant="h4"
                sx={{ margin: "1rem 0", fontSize: "1.2rem" }}
              >
                {title}
              </Typography>
              <div>
                <Button
                  href={github}
                  variant="outlined"
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                >
                  Github
                </Button>
                <Button
                  href={demo}
                  variant="contained"
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                >
                  Live Demo
                </Button>
              </div>
            </article>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
