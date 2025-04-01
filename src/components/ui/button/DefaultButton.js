// src/components/ui/Button/Button.js
import React from "react";
import "../../../styles/components/button/_DefaultButton.scss";

const DefaultButton = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button className={`DefaultButton ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default DefaultButton;
