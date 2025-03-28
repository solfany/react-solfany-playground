import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/layout/_header.scss";

const Header = () => {
  const navigate = useNavigate();
  const memberShipPage = () => {
    navigate("/memberShip");
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo"><Link to="/">SOLFANY</Link></div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><button className="buy-button" onClick={memberShipPage}>MEMBER SHIP</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
