// src/components/ui/List.js
import React from "react";
import "../../styles/components/ui/_typography.scss";
const List = ({ items = [] }) => {
  return (
    <ul className="ui-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
