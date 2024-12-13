import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles/index.css";
import { resdata } from "../utils/resdata";
import Filter from "./Filter";

function Home() {
  const resArr =
    resdata[1]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];
  const [listOfRestaurants, setListOfRestaurant] = useState(resArr);
  const handleFilter = (filteredRestaurants) => {
    setListOfRestaurant(filteredRestaurants);
  };
  return (
    <div className="main-container">
      <Filter
        listOfRestaurants={listOfRestaurants}
        handleFilter={handleFilter}
      />
      <div className="res-con">
        {listOfRestaurants.map((restaurant, index) => (
          <div className="res-container" key={index}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
