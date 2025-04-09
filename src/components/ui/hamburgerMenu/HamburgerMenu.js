// src/components/Header/HamburgerMenu.js (새 파일)
import React from "react";
import { Menu } from "lucide-react";
import "../../../styles/components/ui/hamburgerMenu/_hamburgerMenu.scss";

const HamburgerMenu = ({ toggle }) => (
  <button className="hamburger" onClick={toggle} aria-label="모바일 메뉴 열기">
    <Menu size={20} />
  </button>
);

export default HamburgerMenu;
