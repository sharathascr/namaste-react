import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import { resdata } from "./utils/resdata";

const App = () => {
  const resArr =
    resdata[1]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];
  const [listOfRestaurants, setListOfRestaurant] = useState(resArr);
  const handleTopRatedRestaurents = () => {
    setListOfRestaurant(
      listOfRestaurants.filter((res) => res.info.avgRating >= 4.3)
    );
  };
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="filter">
          <button onClick={handleTopRatedRestaurents}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-con">
          {listOfRestaurants.map((restaurant, index) => (
            <div className="res-container" key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
