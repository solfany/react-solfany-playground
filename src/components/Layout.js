// src/components/Layout.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header/index";
import Footer from "./Footer";
import "../styles/layout/_layout.scss";
import Container from "../components/ui/Container";
import SubHeader from "./Header/SubHeader";

const Layout = ({ children }) => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/"); // 또는 === "/project" 도 가능

  const categories = [
    { name: '정보처리기사', url: 'project/qualifications/infoProcessing' },
    { name: '빅데이터분석기사', url: 'project/qualifications/bigdata' },
    { name: 'SQLD', url: 'project/qualifications/sqld' },
    { name: '리눅스마스터', url: 'project/qualifications/linux' }
  ];

  return (
    <div className="app-container">
      <Header />
      <main>
        {isProjectPage && <SubHeader categories={categories} />}
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
