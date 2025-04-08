// src/routes/index.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Membership from "../pages/MemberShip";
import Info from "../pages/Info";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Project from "../pages/Project";
import PremiumServices from "../pages/PremiumServices";
import Question from "../pages/project/qualifications/Question";
import InfoProcessing from "../pages/project/qualifications/InfoProcessing/InfoProcessing";
import QuestionPage from "../pages/project/qualifications/QuestionPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/project" element={<Project />} />
      <Route path="/project/qualifications" element={<Question />} />
      <Route path="/project/qualifications/infoProcessing" element={<InfoProcessing />} />
      <Route path="/project/qualifications/infoProcessing/:examId/:subjectId" element={<QuestionPage />}
    />
      <Route path="/premium" element={<PremiumServices />} />
      <Route path="/membership" element={<Membership />} />
      {/* <Route path="/bigdata" element={<Bigdata />} />
      <Route path="/sqld" element={<Sqld />} /> */}
      
    </Routes>
  );
};

export default AppRoutes;
