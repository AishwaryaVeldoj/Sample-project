import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
