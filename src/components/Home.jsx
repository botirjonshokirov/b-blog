import React from "react";

const Home = () => {
  const lastOpenedPost = "Post 3"; // Replace with logic to fetch the last opened post

  return (
    <div>
      <h1>Welcome to the Blog!</h1>
      <p>Last Opened Post: {lastOpenedPost}</p>
    </div>
  );
};

export default Home;
