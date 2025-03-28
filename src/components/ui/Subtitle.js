// src/components/ui/Subtitle.js
import React from "react";
import "../../styles/components/ui/_typography.scss";

const Subtitle = ({ children }) => {
  return <h2 className="subtitle">{children}</h2>;
};

export default Subtitle;
