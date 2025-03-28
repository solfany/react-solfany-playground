// src/App.js
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Membership from "./pages/MemberShip";
import Info from "./pages/Info";
import About from "./pages/About";
import "./styles/globals.scss";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/Membership" element={<Membership />} />
      </Routes>
    </Layout>
  );
};

export default App;
