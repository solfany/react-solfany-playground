import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo, NavMenu, SearchArea, NotificationBell } from "./index";
import ThemeToggle from "../ui/themeToggle/ThemeToggle";
import DropdownMenu from "../ui/dropdown/DropdownMenu";
import { Globe } from "lucide-react";
import { getLanguageItems } from "../ui/languageSelector/LanguageSelector";
import { useLanguage } from "../../contexts/LanguageContext";
import HamburgerMenu from "../ui/hamburgerMenu/HamburgerMenu.js";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isLangOpen, setIsLangOpen] = useState(false);
  const { setLanguage } = useLanguage();

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const closeLang = () => setIsLangOpen(false);
  const languageItems = getLanguageItems(setLanguage, closeLang);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const closeOnRouteChange = () => setIsMobileMenuOpen(false);
    window.addEventListener("hashchange", closeOnRouteChange);
    return () => window.removeEventListener("hashchange", closeOnRouteChange);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${scrollDirection === "down" ? "hide" : ""}`}>
      {/* 모바일용: 로고와 우측 버튼들이 한 줄에 정렬되도록 래퍼 추가 */}
      <div className="header-top-row">
        <Logo />
        <div className="mobile-controls">
          <DropdownMenu name={<Globe size={22} />}
            isOpen={isLangOpen}
            toggle={toggleLang}
            menuItems={languageItems}
            type="action"
          />
          <ThemeToggle />
          <NotificationBell navigate={navigate} />
          <HamburgerMenu toggle={toggleMobileMenu} />
        </div>
      </div>

      {/* 데스크탑용 nav */}
      <nav>
        <NavMenu
          isActive={isActive}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          navigate={navigate}
        />
      </nav>

      {/* 데스크탑용 오른쪽 메뉴 */}
      <div className="miscellaneous-menu">
        <SearchArea />
        <DropdownMenu name={<Globe size={20} />}
          isOpen={isLangOpen}
          toggle={toggleLang}
          menuItems={languageItems}
        />
        <ThemeToggle />
        <NotificationBell navigate={navigate} />
        <HamburgerMenu toggle={toggleMobileMenu} />
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <NavMenu
            isActive={isActive}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            navigate={navigate}
          />
        </div>
      )}
    </header>
  );
};

export default Header;