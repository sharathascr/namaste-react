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
      <p id="restaurant-name">
        {res.name.length > 35 ? res.name.substring(0, 35) + "..." : res.name}
      </p>
      <p id="restaurant-rating">
        <i className="fa-solid fa-star" id="ratingIcon"></i>
        {res.avgRating}{" "}
        <span id="restaurant-delivery">
          <li>{res?.sla?.slaString}</li>
        </span>
      </p>
      <p className="restaurant-locality">
        {res.cuisines.join(", ").length > 35
          ? res.cuisines.join(", ").substring(0, 35) + "..."
          : res.cuisines.join(", ")}
      </p>
      <p className="restaurant-locality">{res.locality}</p>
    </div>
  );
}

export default RestaurantCard;
