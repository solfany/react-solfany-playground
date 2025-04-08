// src/components/ui/Section.jsx
import React from "react";
import "../../../styles/components/ui/_section.scss";

const FlexSection = ({ children, className = "", style }) => {
    return <section className={`flex-section ${className}`} style={style}>{children}</section>;
};

export default FlexSection;
