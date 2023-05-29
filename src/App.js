import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import OurWorks from "./components/major/OurWorks";
import OurWorksPage from "./pages/ourWorksPage";
import SingleWork from "./pages/singleWork";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/our_works" element={<OurWorksPage />} />
        <Route path="/work/:workname" element={<SingleWork />} />
      </Route>
    </Routes>
  );
}

export default App;
