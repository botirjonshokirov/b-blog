import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
} from "@mui/material";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        if (response.ok) {
          const data = await response.json();

          // Fetch the content of the last comment for each post
          const updatedPosts = await Promise.all(
            data.map(async (post) => {
              if (post.comments.length > 0) {
                const commentResponse = await fetch(
                  `http://localhost:5000/api/posts/${post._id}/comments/${
                    post.comments[post.comments.length - 1]
                  }`
                );
                if (commentResponse.ok) {
                  const commentData = await commentResponse.json();
                  post.lastCommentContent = commentData.content;
                } else {
                  console.log(
                    `Failed to fetch last comment for post: ${post._id}`
                  );
                }
              }
              return post;
            })
          );

          setPosts(updatedPosts);
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
    <Container maxWidth="sm" sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Page
      </Typography>
      {posts.map((post) => (
        <Card key={post._id} sx={{ marginBottom: "16px" }}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {post.content.substring(0, 100)}...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Likes: {post.likes}
            </Typography>
            {post.lastCommentContent && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Last Comment: {post.lastCommentContent}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/blog/${post._id}`} size="small">
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Blog;
