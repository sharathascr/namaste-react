import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import "../styles/Filter.css";

function Filter({ listOfRestaurants, handleFilter }) {
  const [activeFilter, setActiveFilter] = useState("");
  const filterFunctions = {
    TopRestaurants: (restaurant) => restaurant.avgRating >= 4.3,
    fastDelivery: (restaurant) => restaurant.sla.deliveryTime <= 30,
    priceForTwo: (restaurant) =>
      restaurant.costForTwo.replace(/[^\d]/g, "") <= 300,
    pureVeg: (restaurant) => restaurant.veg === true,
  };

  const handleButtonClick = useCallback(
    (event) => {
      const filterId = event.target.getAttribute("id");
      setActiveFilter(filterId);
      const filterFunction = filterFunctions[filterId];
      const filteredRestaurants = filterFunction
        ? listOfRestaurants.filter(filterFunction)
        : listOfRestaurants;
      handleFilter(filteredRestaurants);
    },
    [listOfRestaurants, handleFilter]
  );
  useEffect(() => {
    if (activeFilter) {
      const filterFunction = filterFunctions[activeFilter];
      const filteredRestaurants = filterFunction
        ? listOfRestaurants.filter(filterFunction)
        : listOfRestaurants;
      handleFilter(filteredRestaurants);
    }
  }, [activeFilter, listOfRestaurants, handleFilter]);
  return (
    <div className="filter-component" onClick={handleButtonClick}>
      {Object.keys(filterFunctions).map((filterId) => (
        <button
          key={filterId}
          id={filterId}
          className={classNames("filter-btn", {
            active: activeFilter === filterId,
          })}
        >
          {filterId === "priceForTwo"
            ? "Price for two < 300"
            : filterId.replace(/([A-Z])/g, " $1").trim()}
        </button>
      ))}
    </div>
  );
}
export default Filter;
