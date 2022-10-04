import React from "react";
import "./css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import SingleBlog from "./components/SingleBlog";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<SingleBlog />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
