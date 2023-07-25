import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Admin from "./components/Admin-panel/Admin";
import PostDetail from "./components/Blog/PostDetail";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
// import Portfolio from "./components/Portfolio/Portfolio";
import { Box } from "@mui/material";
import Projects from "./components/Portfolio/projects/Projects";
import Contact from "./components/Portfolio/contact/Contact";

function App() {
  return (
    <Router>
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
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
