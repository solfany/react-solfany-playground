import React, { useState, useRef, useEffect } from "react";
import "../../../styles/components/searchBar/_SearchBar.scss";
import { Search, SearchCheck } from "lucide-react";
import DefaultButton from "../button/DefaultButton";



import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // 가상의 검색 제안 데이터 (실제로는 API에서 가져올 수 있음)
  const dummySuggestions = [
    "솔파니 시작하기",
    "솔파니 서비스",
    "솔파니 멤버십 혜택",
    "솔파니 프로젝트",
    "솔파니 디자인"
  ];

  // 검색어에 따른 제안 필터링
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = dummySuggestions.filter(
        suggestion => suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  // 검색 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsExpanded(false);
    }
  };

  // 검색창 외부 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setIsExpanded(false);
        setSearchSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="search-wrapper" ref={searchInputRef}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`search-input ${isExpanded ? 'expanded' : ''}`}
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
        />
        <Search className="search-icon" size={18} strokeWidth={2} />
      </form>


      {isExpanded && searchSuggestions.length > 0 && (
        <div className="search-suggestions">
          {searchSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="search-suggestion-item"
              onClick={() => {
                setSearchQuery(suggestion);
                navigate(`/search?q=${encodeURIComponent(suggestion)}`);
                setIsExpanded(false);
              }}
            >
              <SearchCheck className="suggestion-icon" size={14} strokeWidth={1.5} />
              {suggestion}
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default SearchBar;