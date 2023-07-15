// api.js

export const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/posts");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Failed to fetch posts");
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchLastComment = async (postId) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/posts/${postId}/comments/last`
    );
    if (response.ok) {
      const commentData = await response.json();
      return commentData.content;
    } else {
      console.log(`Failed to fetch last comment for post: ${postId}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching last comment:", error);
    return null;
  }
};

export const fetchPost = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/posts/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Failed to fetch post");
      return null;
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

export const fetchComments = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/posts/${id}/comments`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Failed to fetch comments");
      return null;
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
    return null;
  }
};

export const submitComment = async (id, name, comment) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/posts/${id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, content: comment }),
      }
    );

    if (response.ok) {
      console.log("Comment submitted successfully");
      return true;
    } else {
      console.log("Failed to submit comment");
      return false;
    }
  } catch (error) {
    console.error("Error submitting comment:", error);
    return false;
  }
};

export const likePost = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/posts/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Post liked successfully");
      return true;
    } else {
      console.log("Failed to like post");
      return false;
    }
  } catch (error) {
    console.error("Error liking post:", error);
    return false;
  }
};
