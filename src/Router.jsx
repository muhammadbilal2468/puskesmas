import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/Auth/Login/Login";
import LandingPage from "./screen/LandingPage/LandingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* --- AUTH --- */}
        <Route path="/login" element={<Login />} />

        {/* --- HOME --- */}
        <Route path="/home" element={<h1>Home</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
