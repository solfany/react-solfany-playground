import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import CustomLink from "../customLink/CustomLink";
import "../../../styles/components/ui/dropdownMenu/_dropdownMenu.scss";

const DropdownMenu = ({ name, isOpen, toggle, menuItems = [], type = "nav" }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        toggle(false);
      }
    };

    const handleScroll = () => {
      // 스크롤 시 닫히는 건 action 타입만 해당
      if (isOpen && type === "action") {
        toggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (type === "action") {
      window.addEventListener("scroll", handleScroll, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (type === "action") {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, [isOpen, toggle, type]);

  return (
    <li
      className={`dropdown dropdown--${type} ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
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
          {menuItems.map((item, index) =>
            item.to ? (
              <CustomLink key={index} to={item.to} className="dropdown-item">
                {item.label}
              </CustomLink>
            ) : (
              <button
                key={index}
                className="dropdown-item"
                onClick={item.action}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;
