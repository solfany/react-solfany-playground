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
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch("https://api.countapi.xyz/hit/solfany-playground/visits");
        const data = await res.json();
        setVisitorCount(data.value);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        setVisitorCount("오류");
      }
    };

    if (isOpen) {
      fetchVisitorCount();
    }
  }, [isOpen]);

  return (
    <>
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={onClose}>✕</button>
        <p>
          <strong>{visitorCount !== null ? visitorCount : "..."}</strong>
          번째 방문자님 환영합니다.
        </p>
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
      />
    </>
  );
};

export default MobileDrawer;
