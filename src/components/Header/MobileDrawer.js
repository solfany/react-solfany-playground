import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const MobileDrawer = ({
  isOpen,
  onClose,
  isActive,
  isDropdownOpen,
  setIsDropdownOpen,
  navigate
}) => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const storedCount = sessionStorage.getItem("visitor-count");
      const nextCount = storedCount ? parseInt(storedCount, 10) + 1 : 1;
      sessionStorage.setItem("visitor-count", nextCount);
      setVisitorCount(nextCount);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={onClose} aria-label="닫기 버튼">✕</button>

        <div className="drawer-welcome">
          {visitorCount !== null ? (
            <p className="visitor-message">
              <strong className="visitor-count">{visitorCount}</strong>
              <span>번째 방문자님, 환영합니다 🙌</span>
            </p>
          ) : (
            <p className="visitor-message">잠시만 기다려주세요...</p>
          )}
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
