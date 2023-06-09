import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Menu from "./pages/menu";
import SingleWork from "./pages/singleWork";
import OurWorksPage from "./pages/ourWorksPage";
import { AnimatePresence } from "framer-motion";
import BookUs from "./pages/bookUs";
import WhatWeDo from "./pages/whatWeDo";
import Blog from "./pages/blog";
import SingleBlog from "./pages/singleBlog";
import WelcomeAnimation from "./components/major/WelcomeAnimation";
import WorkDetails from "./pages/workDetails";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <WelcomeAnimation />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our_works" element={<OurWorksPage />} />
        <Route path="/book_us" element={<BookUs />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogname/:blogid" element={<SingleBlog />} />
        <Route path="/our_works/:workname" element={<SingleWork />} />
        <Route path="/our_works/:workname/details" element={<WorkDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
