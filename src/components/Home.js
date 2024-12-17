import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles/index.css";
import { resdata } from "../utils/resdata";
import Filter from "./Filter";
import { useFetch } from "./hooks/useFetch";
import ShimmerUI from "./ShimmerUI";

function Home() {
  const data = useFetch(
    "http://localhost:6060/api/restaurants/getAllRestaurants"
  );
  // const resArr =
  //   resdata[1]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  useEffect(() => {
    if (data) {
      setListOfRestaurant(data);
    }
  }, [data]);
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
