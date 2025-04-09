// src/App.js
// 앱의 구조와 Layout 담당
import Layout from "./components/Layout";
import "./styles/globals.scss";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPage } from "./utils/analytics";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    initGA(); // 최초 실행 시 GA 초기화
  }, []);

  useEffect(() => {
    trackPage(location.pathname + location.search); // 경로 바뀔 때마다 추적
  }, [location]);

  return (
      <Layout>
        <AppRoutes />
      </Layout>
  );
};

export default App;
