// MobileControls.js
// 다크모드, 언어 선택, 알림 메뉴 포함
import React from "react";
import DropdownMenu from "../ui/dropdown/DropdownMenu";
import ThemeToggle from "../ui/themeToggle/ThemeToggle";
import NotificationBell from "./NotificationBell";
import HamburgerMenu from "../ui/hamburgerMenu/HamburgerMenu";
import { Globe } from "lucide-react";

const MobileControls = ({
    toggleLang,
    isLangOpen,
    languageItems,
    navigate,
    toggleMobileMenu
}) => (
    <div className="mobile-controls">
        <DropdownMenu
            name={<Globe size={22} />}
            isOpen={isLangOpen}
            toggle={toggleLang}
            menuItems={languageItems}
            type="action"
        />
        <ThemeToggle />
        <NotificationBell navigate={navigate} />
        <HamburgerMenu toggle={toggleMobileMenu} />
    </div>
);

export default MobileControls;