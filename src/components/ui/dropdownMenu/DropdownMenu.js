// DropdownMenu.js
import { ChevronDown } from "lucide-react";
import CustomLink from "../customLink/CustomLink";
import "../../../styles/components/ui/dropdownMenu/_dropdownMenu.scss";

const DropdownMenu = ({ name, isOpen, toggle, menuItems = [] }) => (
  <li className={`dropdown ${isOpen ? "open" : ""}`}>
    <button className="dropdown-toggle" onClick={toggle}>
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
          <CustomLink key={index} to={item.to} className="dropdown-item">
            {item.label}
          </CustomLink>
        ))}
      </div>
    )}
  </li>
);

export default DropdownMenu;
