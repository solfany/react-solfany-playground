// src/routes/index.js
// 실제 라우터 정의
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Membership from "../pages/MemberShip";
import Info from "../pages/Info";
import About from "../pages/About";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memberShip" element={<Membership />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
};


export default AppRoutes;