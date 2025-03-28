// src/components/ui/Text.js
import React from "react";
import "../../styles/components/ui/_typography.scss";
const Text = ({ children }) => {
  return <p className="description">{children}</p>;
};

export default Text;
