import React from "react";
import CustomLink from "../ui/customLink/CustomLink";
import { useTranslation } from "react-i18next";
import DropdownMenu from "../ui/dropdown/DropdownMenu";
import { useLanguage } from "../../contexts/LanguageContext";
import { getLanguageItems } from "../ui/languageSelector/LanguageSelector";
import { useState } from "react";
const NavMenu = ({ isActive, isDropdownOpen, setIsDropdownOpen }) => {
  const { t } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { setLanguage } = useLanguage();

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const closeLang = () => setIsLangOpen(false);
  const languageItems = getLanguageItems(setLanguage, closeLang);
  return (
    <ul className="nav-links">
      <li className="underline-link">
        <CustomLink to="/info" className={isActive("/info") ? "active-nav-item" : ""}>
          정보
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/about" className={isActive("/about") ? "active-nav-item" : ""}>
          소개
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/blog" className={isActive("/blog") ? "active-nav-item" : ""}>
          블로그
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/resource" className={isActive("/blog") ? "active-nav-item" : ""}>
          개발 리소스
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/project" className={isActive("/project") ? "active-nav-item" : ""}>
          사이드 프로젝트
        </CustomLink>
      </li>
      <li className="underline-link">
        <CustomLink to="/premium" className={isActive("/premium") ? "active-nav-item" : ""}>
          유료 서비스
        </CustomLink>
      </li>
    </ul>
  );
};

export default NavMenu;
