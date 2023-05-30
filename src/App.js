import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Menu from "./pages/menu";
import SingleWork from "./pages/singleWork";
import OurWorksPage from "./pages/ourWorksPage";
import { AnimatePresence } from "framer-motion";
import BookUs from "./pages/bookUs";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our_works" element={<OurWorksPage />} />
        <Route path="/book_us" element={<BookUs />} />
        <Route path="/work/:workname" element={<SingleWork />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
