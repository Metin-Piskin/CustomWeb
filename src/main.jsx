import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./Pages/Home";
import VisitUs from "./Pages/VisitUs/VisitUs";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

import TopHeader from "./Components/TopHeader";
import TopRightHeader from "./Components/TopRightHeader";
import RightHeader from "./Components/RightHeader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <div className="AllTopHeaderContainer">
      <TopHeader />
      <TopRightHeader />
    </div>
    <div className="AllPageContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visit" element={<VisitUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <RightHeader />
    </div>
  </Router>
);
