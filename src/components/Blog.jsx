import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
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

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Page
      </Typography>
      {posts.map((post) => (
        <Card key={post._id} sx={{ marginBottom: "16px" }}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content.substring(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/blog/${post._id}`} size="small">
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
