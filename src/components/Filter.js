import React, { useState } from "react";
import "../styles/Filter.css";

function Filter({ listOfRestaurants, handleFilter }) {
  let filteredRestaurants = [];
  const [activeFilter, setActiveFilter] = useState("");
  const handleButtonClick = (event) => {
    switch (event.target.getAttribute("id")) {
      case "TopRestaurants":
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.avgRating >= 4.3
        );

        handleFilter(filteredRestaurants);
        break;
      case "fastDelivery":
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.sla.deliveryTime <= 30
        );
        handleFilter(filteredRestaurants);
        break;
      case "priceForTwo":
        // filteredRestaurants = listOfRestaurants.sort(
        //   (restaurant1, restaurant2) => {
        //     return (
        //       parseInt(restaurant1.costForTwo.substring(1, 4)) -
        //       parseInt(restaurant2.costForTwo.substring(1, 4))
        //     );
        //   }
        // );
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.costForTwo.replace(/[^\d]/g, "") <= 300
        );
        handleFilter(filteredRestaurants);
        break;
      case "pureVeg":
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.veg == true
        );
        handleFilter(filteredRestaurants);
        break;
      default:
        filteredRestaurants = listOfRestaurants;
    }
    setActiveFilter(event.target.getAttribute("id"));
  };
  return (
    <div className="filter-component" onClick={handleButtonClick}>
      <button
        id="TopRestaurants"
        className={`filter-btn ${
          activeFilter === "TopRestaurants" ? "active" : ""
        }`}
      >
        Top Restaurants
      </button>
      <button
        id="fastDelivery"
        className={`filter-btn ${
          activeFilter === "fastDelivery" ? "active" : ""
        }`}
      >
        Fast Delivery
      </button>
      <button
        id="priceForTwo"
        className={`filter-btn ${
          activeFilter === "priceForTwo" ? "active" : ""
        }`}
      >
        Price for two{" < "} 300
      </button>
      <button
        id="pureVeg"
        className={`filter-btn ${activeFilter === "pureVeg" ? "active" : ""}`}
      >
        Pure Veg
      </button>
    </div>
  );
}

export default Filter;
