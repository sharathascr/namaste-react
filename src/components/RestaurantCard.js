import React from "react";
import "../styles/index.css";
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
      <h3>{res.name}</h3>
      <h4>
        {res.avgRating} <span>{res?.sla?.slaString}</span>
      </h4>
      <h4>{res.locality}</h4>
    </div>
  );
}

export default RestaurantCard;
