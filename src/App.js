import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import OurWorks from "./components/major/OurWorks";
import OurWorksPage from "./pages/ourWorksPage";
import SingleWork from "./pages/singleWork";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our_works" element={<OurWorksPage />} />
        <Route path="/work/:workname" element={<SingleWork />} />
      </Route>
    </Routes>
  );
}

export default App;
