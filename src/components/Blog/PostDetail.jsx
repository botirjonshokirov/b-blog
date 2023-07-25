import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { fetchPost } from "../../api/api";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await fetchPost(id);
      if (postData) {
        setPost(postData);
      }
    };

    fetchData();
  }, [id]);

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]+>/g, "");
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h5" component="h2" gutterBottom align="center">
          {post.title}
        </Typography>
        <Typography variant="subtitle2" component="p" align="center">
          {new Date(post.createdAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" component="p" align="justify">
          {stripHtmlTags(post.content)}
        </Typography>
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Go Back
        </Button>
      </Container>
    </div>
  );
};

export default PostDetail;
