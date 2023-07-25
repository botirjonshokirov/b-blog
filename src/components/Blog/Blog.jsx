import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Button, Container } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/posts`
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.log("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const groupPostsByYearAndMonth = () => {
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const groupedPosts = {};

    sortedPosts.forEach((post) => {
      const date = new Date(post.createdAt);
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long" });

      if (!groupedPosts[year]) {
        groupedPosts[year] = {};
      }

      if (!groupedPosts[year][month]) {
        groupedPosts[year][month] = [];
      }

      groupedPosts[year][month].push(post);
    });

    return groupedPosts;
  };

  const groupedPosts = groupPostsByYearAndMonth();

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Page
      </Typography>
      {Object.keys(groupedPosts).map((year) => (
        <React.Fragment key={year}>
          <Typography variant="h5" component="h2" gutterBottom>
            {year}
          </Typography>
          {Object.keys(groupedPosts[year]).map((month) => (
            <React.Fragment key={month}>
              <Typography variant="h6" component="h3" gutterBottom>
                {month}
              </Typography>
              {groupedPosts[year][month].map((post) => (
                <Link to={`/blog/${post.slug}`} key={post._id}>
                  <Card
                    key={post._id}
                    sx={{
                      marginBottom: "16px",
                      height: "91px",
                      width: "550px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ flex: 1, fontWeight: "bold" }}
                    >
                      {new Date(post.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h2"
                      gutterBottom
                      sx={{ flex: 2, textAlign: "center" }}
                    >
                      {post.title}
                    </Typography>
                    <Link
                      to={`/blog/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<IoIosArrowForward />}
                      >
                        Read More
                      </Button>
                    </Link>
                  </Card>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Blog;
