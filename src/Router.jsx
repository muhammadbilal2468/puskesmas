import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screen/LandingPage/LandingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
