// src/components/Header/SearchArea.js
import React from "react";
import SearchBar from "../ui/searchBar/SearchBar";
import { useState } from "react";

const SearchArea = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`search-area ${focused ? "focused" : ""}`}>
      <SearchBar onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      {focused && <span className="search-hint">AI가 자동 완성해줄 수 있어요!</span>}
    </div>
  );
};


export default SearchArea;
