// src/components/Header/NavMenu.js
import React from "react";
import CustomLink from "../ui/customLink/CustomLink";
import DropdownMenu from "../ui/dropdownMenu/DropdownMenu";
import { useTranslation } from "react-i18next";

const NavMenu = ({ isActive, isDropdownOpen, setIsDropdownOpen }) => {
  const { t } = useTranslation();

  return (
    <ul className="nav-links">
      <li className="underline-link">
        <CustomLink to="/info" className={isActive("/info") ? "active-nav-item" : ""}>
          {t("nav.info")}
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/about" className={isActive("/about") ? "active-nav-item" : ""}>
          {t("nav.about")}
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/membership" className={isActive("/membership") ? "active-nav-item" : ""}>
          {t("nav.membership")}
        </CustomLink>
      </li>
      <DropdownMenu
        name={t("nav.services")}
        isOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen((prev) => !prev)}
        menuItems={[
          { label: t("nav.service_ai"), to: "/service-ai" },
          { label: t("nav.service_template"), to: "/service-template" },
          { label: t("nav.service_project"), to: "/service-project" },
        ]}
      />
    </ul>
  );
};

export default NavMenu;
