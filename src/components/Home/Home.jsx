import React, { useEffect, useState } from "react";
import { Typography, Button, Fade, Slide } from "@mui/material";
import "./Home.css";
import meImg from "../../images/me.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [lastOpenedPost, setLastOpenedPost] = useState(null);
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    // Fetch the last opened post from the backend
    const fetchLastOpenedPost = async () => {
      try {
        const response = await fetch("/api/posts/lastOpenedPost"); // Replace with your backend endpoint
        const data = await response.json();
        setLastOpenedPost(data.post);
      } catch (error) {
        console.error("Error fetching last opened post:", error);
      }
    };

    // Fetch the about me information from the backend
    const fetchAboutMe = async () => {
      try {
        const response = await fetch("/api/aboutme"); // Replace with your backend endpoint
        const data = await response.json();
        setAboutMe(data.aboutMe);
      } catch (error) {
        console.error("Error fetching about me:", error);
      }
    };

    fetchLastOpenedPost();
    fetchAboutMe();
  }, []);

  return (
    <div className="container">
      <div className="image_text">
        <Fade in timeout={1000}>
          <img className="profile-picture" src={meImg} alt="Profile Picture" />
        </Fade>
        <div className="about-me">
          <Slide direction="up" in timeout={1000}>
            <Typography variant="h1" component="h1" className="title">
              Botirjon Shokirov
            </Typography>
          </Slide>
          <Typography variant="subtitle1" className="subtitle">
            Software Engineer
          </Typography>
        </div>
      </div>

      <div className="description">
        <Typography variant="body1">{aboutMe}</Typography>
      </div>

      <div className="button-container">
        <Fade in timeout={1000}>
          {/* Use Link component to create the redirect */}
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Go To The Blog!
            </Button>
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
