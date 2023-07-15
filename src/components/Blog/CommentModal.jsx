import React, { useState } from "react";
import { Button, TextField, Modal, Box } from "@mui/material";
import { submitComment } from "../../api/api";

const CommentModal = ({ postId, open, handleClose, handleCommentSubmit }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    const success = await submitComment(postId, name, comment);
    if (success) {
      handleCommentSubmit();
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          width: 400,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Comment"
            value={comment}
            onChange={handleCommentChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Comment
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CommentModal;
