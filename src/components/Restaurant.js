import React, { useEffect, useState } from "react";
import "../styles/Restaurant.css";
import { useParams } from "react-router";
import { useFetchRestaurant } from "./hooks/useFetchRestaurant";

function Restaurant() {
  const { restaurantName } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  try {
    const restaurantData =
      useFetchRestaurant(`http://localhost:6060/api/restaurants/getRestaurantByName/${restaurantName}
    `);
    console.log("resDta", restaurantData);
    useEffect(() => {
      if (restaurantData) {
        setRestaurant(restaurantData);
      }
    }, [restaurantData]);
  } catch (error) {
    console.log("error while fetching restaurant", error);
  }
  //   console.log(restaurant);
  return (
    <div id="restaurant-items-page">
      <div className="restaurant-section">
        <h3>Bakingo</h3>
        <div id="restaurant-header">
          <div className="restaurant-rating">
            <i className="fa-solid fa-star star-rating"></i>
            <p>4.2 (14K+ ratings)</p>
            <li className="costForTwo">$350 for two</li>
          </div>
          <div id="restaurant-address">
            <p className="address-section">
              <span className="outlet">Outlet</span>
              {"-  "}
              <span className="areaName">Nanakramguda</span>
            </p>
            <p>30-40 mins</p>
          </div>
        </div>
        <div className="res-items-section">
          <p className="item-name">Margherita</p>
          <p>$169</p>
          <p className="item-rating">
            {" "}
            <i className="fa-solid fa-star star-small"></i>{" "}
            <span className="rating">4.1</span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
