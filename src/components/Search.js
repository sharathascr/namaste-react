import React, { useState } from "react";
import "../styles/Search.css";

function Search({ listOfRestaurants, handleFilter }) {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    if (!inputValue.trim()) {
      handleFilter(listOfRestaurants);
      return;
    }
    const searchedListofRestuarants = listOfRestaurants.filter(
      (res) =>
        res.areaName?.toLowerCase().includes(inputValue.toLowerCase()) ||
        res.name?.toLowerCase().includes(inputValue.toLowerCase()) ||
        res.cuisines
          ?.toString()
          .toLowerCase()
          .includes(inputValue.toLowerCase())
    );
    handleFilter(searchedListofRestuarants);
  };
  return (
    <div>
      <input
        className="search-input"
        placeholder="search..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          handleSearch();
        }}
      />
    </div>
  );
}

export default Search;
