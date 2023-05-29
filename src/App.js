import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Menu from "./pages/Menu";
import SingleWork from "./pages/singleWork";
import OurWorksPage from "./pages/OurWorksPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our_works" element={<OurWorksPage />} />
        <Route path="/work/:workname" element={<SingleWork />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
