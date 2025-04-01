// src/components/Layout.js
import React from "react";
import Header from "./Header/index";
import Footer from "./Footer";
import "../styles/layout/_layout.scss";
import Container from "../components/ui/Container";

const Layout = ({ children }) => {
  return (
    // 헤더 여백을 위해서 
    <div className="app-container">
      <Header />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;