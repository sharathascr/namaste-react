import React from "react";
import "../styles/restaurantcard.css";
import { RES_IMG_URL } from "../utils/contants";
import { Link } from "react-router";

function RestaurantCard({ restaurant }) {
  return (
    <div className="res-card">
      <Link className="res-link" to={`/restaurants/${restaurant.name}`}>
        <img
          className="res-image"
          src={RES_IMG_URL + restaurant.cloudinaryImageId}
          alt={restaurant.name}
        />
        <p id="restaurant-name">
          {restaurant.name.length > 35
            ? restaurant.name.substring(0, 35) + "..."
            : restaurant.name}
        </p>
        <p id="restaurant-rating">
          <i className="fa-solid fa-star" id="ratingIcon"></i>
          {restaurant.avgRating}{" "}
          <span id="restaurant-delivery">
            <li>{restaurant?.sla?.slaString}</li>
          </span>
        </p>
        <p className="restaurant-locality">
          {restaurant.cuisines.join(", ").length > 35
            ? restaurant.cuisines.join(", ").substring(0, 35) + "..."
            : restaurant.cuisines.join(", ")}
        </p>
        <p className="restaurant-locality">{restaurant.locality}</p>
      </Link>
    </div>
  );
}

export default RestaurantCard;
