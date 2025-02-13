import React from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles/PromotedRestaurant.css";

function PromotedRestraurantCard({ restaurant }) {
  return (
    <div className="promotedRestaurant">
      <p className="promotedLabel">Promoted</p>
      <RestaurantCard restaurant={restaurant} />
    </div>
  );
}

export default PromotedRestraurantCard;
