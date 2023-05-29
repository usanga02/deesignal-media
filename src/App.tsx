import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import OurWorksPage from "./pages/OurWorksPage";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our_works" element={<OurWorksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
