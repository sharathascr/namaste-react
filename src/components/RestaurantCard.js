import React from "react";
import "../styles/restaurantcard.css";
import { RES_IMG_URL } from "../utils/contants";

function RestaurantCard({ restaurant }) {
  const res = restaurant["info"];
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={RES_IMG_URL + res.cloudinaryImageId}
        alt={res.name}
      />
      <p id="restaurant-name">{res.name}</p>
      <p id="restaurant-rating">
        <i class="fa-solid fa-star"></i>
        {res.avgRating}{" "}
        <span id="restaurant-delivery">{res?.sla?.slaString}</span>
      </p>
      <p id="restaurant-locality">{res.locality}</p>
    </div>
  );
}

export default RestaurantCard;
