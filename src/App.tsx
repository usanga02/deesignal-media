import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
