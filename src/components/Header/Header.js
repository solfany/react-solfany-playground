import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo, NavMenu, SearchArea, NotificationBell } from "./index";
import ThemeToggle from "../ui/themeToggle/ThemeToggle";
import DropdownMenu from "../ui/dropdown/DropdownMenu";
import { Globe } from "lucide-react";
import { getLanguageItems } from "../ui/languageSelector/LanguageSelector";
import { useLanguage } from "../../contexts/LanguageContext";
import HamburgerMenu from "../ui/hamburgerMenu/HamburgerMenu.js";
import MobileDrawer from "./MobileDrawer";
import MobileControls from "./MobileControls";
import UseHeaderScrollEffect from "./UseHeaderScrollEffect";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { setLanguage } = useLanguage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const closeLang = () => setIsLangOpen(false);
  const languageItems = getLanguageItems(setLanguage, closeLang);

  const { scrolled, scrollDirection } = UseHeaderScrollEffect();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setTimeout(() => setIsDrawerVisible(true), 10);
  };

  const closeMobileMenu = () => {
    setIsDrawerVisible(false);
    setTimeout(() => setIsMobileMenuOpen(false), 300);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${scrollDirection === "down" ? "hide" : ""}`}>
      <div className="header-top-row">
        <Logo />
        <MobileControls
          toggleLang={toggleLang}
          isLangOpen={isLangOpen}
          languageItems={languageItems}
          navigate={navigate}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      <nav>
        <NavMenu
          isActive={isActive}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          navigate={navigate}
        />
      </nav>

      <div className="miscellaneous-menu">
        <SearchArea />
        <DropdownMenu
          name={<Globe size={20} />}
          isOpen={isLangOpen}
          toggle={toggleLang}
          menuItems={languageItems}
        />
        <ThemeToggle />
        <NotificationBell navigate={navigate} />
        <HamburgerMenu toggle={toggleMobileMenu} />
      </div>

      {isMobileMenuOpen && (
        <MobileDrawer
          isOpen={isDrawerVisible}
          onClose={closeMobileMenu}
          isActive={isActive}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          navigate={navigate}
        />
      )}
    </header>
  );
};

export default Header;