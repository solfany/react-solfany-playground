// src/components/ui/Section.jsx
import React from "react";
import "../../../styles/components/ui/_section.scss";

const Section = ({ children, className = "" }) => {
    return <section className={`section ${className}`}>{children}</section>;
};

export default Section;
