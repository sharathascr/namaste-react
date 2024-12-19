import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles/index.css";
import Filter from "./Filter";
import { useFetch } from "./hooks/useFetch";
import ShimmerUI from "./ShimmerUI";
import Search from "./Search";

function Home() {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  try {
    const data = useFetch(
      "http://localhost:6060/api/restaurants/getAllRestaurants"
    );
    useEffect(() => {
      if (data) {
        setListOfRestaurant(data);
      }
    }, [data]);
  } catch (error) {
    alert(error?.response?.message || "Error in fetching data from backend");
  }
  const handleFilter = (filteredRestaurants) => {
    setListOfRestaurant(filteredRestaurants);
  };
  return (
    <div className="main-container">
      <div className="main-header">
        <div className="search-container">
          <Search listOfRestaurants={listOfRestaurants} />
        </div>
        <div className="filter-container">
          <Filter
            listOfRestaurants={listOfRestaurants}
            handleFilter={handleFilter}
          />
        </div>
      </div>
      <div className="res-con">
        {listOfRestaurants.length != 0 ? (
          listOfRestaurants.map((restaurant, index) => (
            <div className="res-container" key={index}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))
        ) : (
          <ShimmerUI />
        )}
      </div>
    </div>
  );
}

export default Home;
