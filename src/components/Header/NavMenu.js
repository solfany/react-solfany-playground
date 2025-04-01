// src/components/Header/NavMenu.js
import React from "react";
import CustomLink from "../ui/customLink/CustomLink";
import DropdownMenu from "../ui/dropdownMenu/DropdownMenu";

const NavMenu = ({ isActive, isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <ul className="nav-links">
      <li className="underline-link">
        <CustomLink to="/info" className={isActive("/info") ? "active-nav-item" : ""}>
          Info
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/about" className={isActive("/about") ? "active-nav-item" : ""}>
          About Us
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/membership" className={isActive("/membership") ? "active-nav-item" : ""}>
          Membership
        </CustomLink>
      </li>
      <DropdownMenu
        name={"서비스 안내"}
        isOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen((prev) => !prev)}
        menuItems={[
          { label: "AI 추천", to: "/service-ai" },
          { label: "디자인 템플릿", to: "/service-template" },
          { label: "프로젝트 관리", to: "/service-project" },
        ]}
      />
    </ul>
  );
};

export default NavMenu;
