import React, { useEffect, useState } from "react";
import "../styles/Restaurant.css";
import { useParams } from "react-router";
import { useFetchRestaurant } from "./hooks/useFetchRestaurant";
import { ITEM_IMG_URL } from "../utils/contants";
import axios from "axios";

function Restaurant() {
  const { restaurantName } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  try {
    useEffect(() => {
      const fetchData = async () => {
        const result =
          await axios.get(`http://localhost:6060/api/restaurants/getRestaurantByName/${restaurantName}
            `);
        setRestaurant(result.data);
      };
      fetchData();
    }, [restaurantName]);
  } catch (error) {
    console.log("Error in fetching restaurant", error);
  }
  console.log(restaurant);
  return (
    <div id="restaurant-items-page">
      {restaurant ? (
        <div className="restaurant-section">
          <h3>{restaurant?.name}</h3>
          <div id="restaurant-header">
            <div className="restaurant-rating">
              <i className="fa-solid fa-star star-rating"></i>
              <p>
                {restaurant?.avgRating} ({restaurant?.totalRatingsString}{" "}
                ratings)
              </p>
              <li className="costForTwo">{restaurant?.costForTwo}</li>
            </div>
            <div id="restaurant-address">
              <p className="address-section">
                <span className="outlet">Outlet</span>
                {"-  "}
                <span className="areaName">{restaurant?.areaName}</span>
              </p>
              <p>{restaurant?.sla?.slaString}</p>
            </div>
          </div>
          {restaurant.items.map((res, index) => (
            <div className="item-container" key={index}>
              <div className="res-items-section">
                <p className="item-name">{res?.name}</p>
                <p className="item-price">
                  ₹{res?.price / 100 || res?.defaultPrice / 100}
                </p>
                {res?.ratings?.aggregatedRating?.rating && (
                  <p className="item-rating">
                    {" "}
                    <i className="fa-solid fa-star star-small"></i>{" "}
                    <span className="rating">
                      {res?.ratings?.aggregatedRating?.rating}
                    </span>
                    <span>
                      ({res?.ratings?.aggregatedRating?.ratingCountV2})
                    </span>
                  </p>
                )}
                <p className="item-description">
                  {res?.description?.substring(0, 100).concat("...")}
                </p>
              </div>
              <div className="div-item-img">
                <img
                  className="item-img"
                  src={ITEM_IMG_URL + res?.imageId}
                  alt={res?.name}
                />
                <button className="item-add-btn">Add</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Restaurant;
