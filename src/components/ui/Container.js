// components/ui/Container.jsx
import React from "react";
import "../../styles/components/ui/_container.scss";

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
