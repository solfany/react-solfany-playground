import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const memberShipPage = () => {
    navigate("/memberShip");
  };
  
  return (
    <header className="header">
      <div className="logo"><Link to="/">SOLFANY</Link></div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mbti">MBTI</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><button className="buy-button" onClick={memberShipPage}>MEMBER SHIP</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
