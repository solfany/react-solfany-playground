// src/components/ui/Section.jsx
import React from "react";
import "../../../styles/components/ui/_section.scss";

const FlexSection = ({ children, className = "" }) => {
    return <section className={`flex-section ${className}`}>{children}</section>;
};

export default FlexSection;
