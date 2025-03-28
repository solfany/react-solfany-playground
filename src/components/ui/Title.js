// src/components/ui/Title.js
import React from "react";
import "../../styles/components/ui/_typography.scss";

const Title = ({ children, level = 1 }) => {
  const Tag = `h${level}`;
  return <Tag className="title">{children}</Tag>;
};

export default Title;
