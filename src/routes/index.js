import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Mbti from "../pages/Mbti";
import Result from "../pages/Result";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mbti" element={<Mbti />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
