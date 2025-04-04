// src/routes/index.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Membership from "../pages/MemberShip";
import Info from "../pages/Info";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import PremiumServices from "../pages/PremiumServices";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/premium" element={<PremiumServices />} />
      <Route path="/membership" element={<Membership />} /> {/* 필요 시 유지 */}
    </Routes>
  );
};

export default AppRoutes;
