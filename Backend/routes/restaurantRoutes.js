const express = require("express");
const restaurantRoutes = express.Router();
const Restaurants = require("../Model/restaurantSchema");
restaurantRoutes.use(express.json());

restaurantRoutes.get("/getAllRestaurants", async (req, res) => {
  try {
    const restaurantsArray = await Restaurants.find();
    res.status(200).send(restaurantsArray);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

restaurantRoutes.put("/add-items/:resId", async (req, res) => {
  const { resId } = req.params;
  const newItems = req.body;
  const result = await Restaurants.updateOne(
    { id: resId },
    { $set: { items: newItems } }
  );
  res.send({ message: `${result.modifiedCount} document[s] updated` });
});

restaurantRoutes.get("/getRestaurantByName/:resName", async (req, res) => {
  try {
    const { resName } = req.params;
    const result = await Restaurants.findOne({ name: resName });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

//get Item
// write a backend code to get the item by restaurant name and item id

restaurantRoutes.get("/getItem/:resName/:itemId", async (req, res) => {
  try {
    const { resName, itemId } = req.params;
    const resData = await Restaurants.findOne({ name: resName });
    const item = resData.items.find((item) => item.id == itemId);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = restaurantRoutes;
