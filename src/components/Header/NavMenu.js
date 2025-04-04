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

      {/* ✅ 개발 리소스 드롭다운 */}
      <DropdownMenu
        name="개발 리소스"
        isOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen(prev => !prev)}
        menuItems={[
          { label: "JSON 변환기", to: "/tool/json" },
          { label: "티스토리 변환기", to: "/tool/tistory" },
          { label: "기타 유틸", to: "/tool/others" },
        ]}
      />

      <li className="underline-link">
        <CustomLink to="/projects" className={isActive("/projects") ? "active-nav-item" : ""}>
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
