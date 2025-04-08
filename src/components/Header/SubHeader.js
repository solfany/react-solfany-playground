import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SubHeader.scss";

const SubHeader = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigate = useNavigate();

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
    const selectedCategory = categories[index];
    if (selectedCategory.url) {
      navigate(selectedCategory.url);
    }
  };

  return (
    <header className="sub-header">
      <div className="sub-header-container">
        <nav className="category-menu">
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index} className="category-item">
                <button
                  className={`category-button ${activeCategory === index ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(index)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SubHeader;
