import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import { resdata } from "./utils/resdata";
import Filter from "./components/Filter";

const App = () => {
  const resArr =
    resdata[1]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];
  const [listOfRestaurants, setListOfRestaurant] = useState(resArr);
  const handleFilter = (filteredRestaurants) => {
    setListOfRestaurant(filteredRestaurants);
  };

  return (
    <div className="App-page">
      <Header />
      <div className="main-container">
        <Filter
          listOfRestaurants={listOfRestaurants}
          handleFilter={handleFilter}
        />
        <div className="res-con">
          {listOfRestaurants.map((restaurant, index) => (
            <div className="res-container" key={index}>
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
