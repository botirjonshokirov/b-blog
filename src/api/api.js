export const fetchPosts = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`);
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

// export const fetchLastComment = async (slug) => {
//   try {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/api/posts/${slug}/comments/last`
//     );
//     if (response.ok) {
//       const commentData = await response.json();
//       return commentData.content;
//     } else {
//       console.log(`Failed to fetch last comment for post: ${slug}`);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching last comment:", error);
//     return null;
//   }
// };

export const fetchPost = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/posts/${slug}`
    );
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

// export const fetchComments = async (slug) => {
//   try {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/api/posts/${slug}/comments`
//     );
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       console.log("Failed to fetch comments");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching comments:", error);
//     return null;
//   }
// };

// export const submitComment = async (slug, name, comment) => {
//   try {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/api/posts/${slug}/comments`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, content: comment }),
//       }
//     );

//     if (response.ok) {
//       console.log("Comment submitted successfully");
//       return true;
//     } else {
//       console.log("Failed to submit comment");
//       return false;
//     }
//   } catch (error) {
//     console.error("Error submitting comment:", error);
//     return false;
//   }
// };
