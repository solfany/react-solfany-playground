import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo, NavMenu, SearchArea, NotificationBell } from "./index";
import ThemeToggle from "../ui/themeToggle/ThemeToggle";
import DropdownMenu from "../ui/dropdownMenu/DropdownMenu";
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

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          el.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const closeOnRouteChange = () => setIsMobileMenuOpen(false);
    window.addEventListener("hashchange", closeOnRouteChange);
    return () => window.removeEventListener("hashchange", closeOnRouteChange);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Logo />
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

        <DropdownMenu name={<Globe size={16} />}
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