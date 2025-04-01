// src/components/ui/ThemeToggle/ThemeToggle.js
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "../../../styles/components/themeToggle/_ThemeToggle.scss";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button className="theme-toggle" onClick={() => setDark((prev) => !prev)} title="테마 전환">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
