import React from "react";
import "../styles/Search.css";

function Search({ listOfRestaurants }) {
  const handleSearch = () => {
    alert("iun");
  };
  return (
    <div>
      <input
        className="search-input"
        placeholder="search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
