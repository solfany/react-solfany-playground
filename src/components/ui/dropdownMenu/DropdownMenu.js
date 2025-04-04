// DropdownMenu.js
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import CustomLink from "../customLink/CustomLink";
import "../../../styles/components/ui/dropdownMenu/_dropdownMenu.scss";

const DropdownMenu = ({ name, isOpen, toggle, menuItems = [] }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggle(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        toggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen, toggle]);

  return (
    <li className={`dropdown ${isOpen ? "open" : ""}`} ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => toggle(!isOpen)}>
        {name}
        <ChevronDown
          className={`dropdown-arrow ${isOpen ? "open" : ""}`}
          size={16}
          strokeWidth={2}
        />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {menuItems.map((item, index) => (
            item.to ? (
              <CustomLink key={index} to={item.to} className="dropdown-item">
                {item.label}
              </CustomLink>
            ) : (
              <button key={index} className="dropdown-item" onClick={item.action}>
                {item.label}
              </button>
            )
          ))}
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;
