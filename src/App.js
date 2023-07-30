import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Admin from "./components/Admin-panel/Admin";
import PostDetail from "./components/Blog/PostDetail";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import { Box } from "@mui/material";
import Projects from "./components/Portfolio/projects/Projects";
import Contact from "./components/Portfolio/contact/Contact";
import LoadingScreen from "./components/Home/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time by waiting for 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Box paddingBottom="4rem">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<PostDetail />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Box>
      )}
    </Router>
  );
}

export default App;
