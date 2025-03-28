// src/components/Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout/_layout.scss"; // 이미 있는 layout 스타일

const Layout = ({ children }) => {
  return (
    // 헤더 여백을 위해서 
    <div className="app-container"> 
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;