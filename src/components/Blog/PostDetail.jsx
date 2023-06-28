import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.log("Failed to fetch post");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Function to remove HTML tags using a regular expression
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]+>/g, "");
  };

  return (
    <div>
      <h1>Post Detail</h1>
      <h2>{post.title}</h2>
      <p>{stripHtmlTags(post.content)}</p>
    </div>
  );
};

export default PostDetail;
