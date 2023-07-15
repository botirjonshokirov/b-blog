import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
  fetchPost,
  likePost,
  fetchComments,
  submitComment,
} from "../../api/api";
import CommentModal from "./CommentModal";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const postData = await fetchPost(id);
      const commentsData = await fetchComments(id);
      if (postData) {
        setPost(postData);
      }
      if (commentsData) {
        setComments(commentsData);
      }
    };

    fetchData();
  }, [id]);

  const handleLikeClick = async () => {
    if (!isLiked) {
      const success = await likePost(id);
      if (success) {
        const updatedPost = { ...post };
        updatedPost.likes += 1;
        setPost(updatedPost);
        setIsLiked(true);
      }
    } else {
      console.log("You have already liked this post");
    }
  };

  const handleCommentSubmit = async () => {
    const success = await submitComment(id, name, comment);
    if (success) {
      const commentsData = await fetchComments();
      if (commentsData) {
        setComments(commentsData);
      }
      setName("");
      setComment("");
      setCommentModalOpen(false);
    }
  };

  const openCommentModal = () => {
    setCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };

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
        <Typography variant="body1" component="p" align="justify">
          {stripHtmlTags(post.content)}
        </Typography>
        <Box mt={3}>
          <Button
            onClick={openCommentModal}
            variant="contained"
            color="primary"
          >
            Add Comment
          </Button>
        </Box>
        <Box mt={3}>
          <Button
            onClick={handleLikeClick}
            variant="contained"
            color="primary"
            startIcon={<ThumbUpAltIcon />}
            disabled={isLiked}
          >
            Like ({post.likes})
          </Button>
        </Box>
        <Box mt={3}>
          <Typography variant="h6" component="h3" gutterBottom>
            Comments
          </Typography>
          <List>
            {comments.map((comment, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={comment.name}
                    secondary={comment.content}
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
        <CommentModal
          open={commentModalOpen}
          handleClose={closeCommentModal}
          handleCommentSubmit={handleCommentSubmit}
          name={name}
          comment={comment}
          setName={setName}
          setComment={setComment}
        />
      </Container>
    </div>
  );
};

export default PostDetail;
