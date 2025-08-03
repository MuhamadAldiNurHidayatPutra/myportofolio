import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import App from "../App";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Project from "../pages/project";
import ProjectInfo from "../pages/projectInfo";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
