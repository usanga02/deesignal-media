import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages";
import OurWorks from "./components/major/OurWorks";
import OurWorksPage from "./pages/ourWorksPage";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/our_works" element={<OurWorksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
