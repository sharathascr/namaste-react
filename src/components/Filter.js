import React from "react";
import "../styles/Filter.css";

function Filter({ listOfRestaurants, handleFilter }) {
  let filteredRestaurants = [];
  const handleButtonClick = (event) => {
    switch (event.target.getAttribute("id")) {
      case "TopRestaurants":
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.info.avgRating >= 4.3
        );
        handleFilter(filteredRestaurants);
        break;
      case "fastDelivery":
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.info.sla.deliveryTime <= 30
        );
        handleFilter(filteredRestaurants);
        break;
      case "priceForTwo":
        // filteredRestaurants = listOfRestaurants.sort(
        //   (restaurant1, restaurant2) => {
        //     return (
        //       parseInt(restaurant1.info.costForTwo.substring(1, 4)) -
        //       parseInt(restaurant2.info.costForTwo.substring(1, 4))
        //     );
        //   }
        // );
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.info.costForTwo.substring(1, 4) <= 300
        );
        handleFilter(filteredRestaurants);
        break;
      case "pureVeg":
        filteredRestaurants = listOfRestaurants.filter(
          (restaurant) => restaurant.info.veg == true
        );
        handleFilter(filteredRestaurants);
        break;
    }
  };
  return (
    <div className="filter-component" onClick={handleButtonClick}>
      <button id="TopRestaurants" className="filter-btn">
        Top Restaurants
      </button>
      <button id="fastDelivery" className="filter-btn">
        Fast Delivery
      </button>
      <button id="priceForTwo" className="filter-btn">
        Price for two{" < "} 300
      </button>
      <button id="pureVeg" className="filter-btn">
        Pure Veg
      </button>
    </div>
  );
}

export default Filter;
