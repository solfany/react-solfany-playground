// src/components/ui/button/CheckButton.jsx
import React from "react";
import "./CheckButton.scss";

const CheckButton = ({ onClick, disabled = false, children = "채점 및 기록" }) => {
  return (
    <button
      className="check-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CheckButton;
