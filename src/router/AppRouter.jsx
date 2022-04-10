import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Details from "../pages/Details";

function AppRouter() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default AppRouter;
