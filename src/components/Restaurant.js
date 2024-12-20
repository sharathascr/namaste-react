import React, { useEffect, useState } from "react";
import "../styles/Restaurant.css";
import { useParams } from "react-router";
import { useFetchRestaurant } from "./hooks/useFetchRestaurant";
import { ITEM_IMG_URL } from "../utils/contants";

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
  console.log(restaurant);
  return (
    <div id="restaurant-items-page">
      <div className="restaurant-section">
        <h3>{restaurant.name}</h3>
        <div id="restaurant-header">
          <div className="restaurant-rating">
            <i className="fa-solid fa-star star-rating"></i>
            <p>
              {restaurant.avgRating} ({restaurant.totalRatingsString} ratings)
            </p>
            <li className="costForTwo">{restaurant.costForTwo}</li>
          </div>
          <div id="restaurant-address">
            <p className="address-section">
              <span className="outlet">Outlet</span>
              {"-  "}
              <span className="areaName">{restaurant.areaName}</span>
            </p>
            <p>{restaurant.sla.slaString}</p>
          </div>
        </div>
        {restaurant.items.map((res) => (
          <div className="item-container">
            <div className="res-items-section">
              <p className="item-name">{res.name}</p>
              <p className="item-price">{res.price || res.defaultPrice}</p>
              <p className="item-rating">
                {" "}
                <i className="fa-solid fa-star star-small"></i>{" "}
                <span className="rating">
                  {res.ratings.aggregatedRating.rating}
                </span>
                <span>({res.ratings?.aggregatedRating?.ratingCountV2})</span>
              </p>
              <p className="item-description">{res.description}</p>
            </div>
            <div className="div-item-img">
              <img
                className="item-img"
                src={ITEM_IMG_URL + restaurant.cloudinaryImageId}
                alt={restaurant.name}
              />
              <button className="item-add-btn">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
