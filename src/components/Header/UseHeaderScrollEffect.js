// useHeaderScrollEffect.js
// 스크롤 여부 + 스크롤 방향 감지
// scrolled, scrollDirection 반환

import { useState, useEffect } from "react";

const useHeaderScrollEffect = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY && currentY > 60 ? "down" : "up");
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { scrolled, scrollDirection };
};

export default useHeaderScrollEffect;
