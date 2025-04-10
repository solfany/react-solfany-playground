import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import VisitorCounter from "./VisitorCounter";

const MobileDrawer = ({
  isOpen,
  onClose,
  isActive,
  isDropdownOpen,
  setIsDropdownOpen,
  navigate
}) => {
  return (
    <>
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={onClose} aria-label="닫기 버튼">✕</button>

        <div className="drawer-welcome">
          <p className="visitor-message">
            <VisitorCounter />
          </p>
        </div>

        <NavMenu
          isActive={isActive}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          navigate={navigate}
        />
      </div>

      <div
        className={`mobile-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
    </>
  );
};

export default MobileDrawer;
