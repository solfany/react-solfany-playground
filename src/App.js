// App.js → 애플리케이션의 메인 컴포넌트

// 모든 페이지와 공통 UI(예: Header, Footer)를 포함하는 최상위 컴포넌트
// 실제 화면 UI를 렌더링하는 역할
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mbti from "./pages/Mbti";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import Membership from "./pages/MemberShip";
import "./styles/globals.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mbti" element={<Mbti />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
