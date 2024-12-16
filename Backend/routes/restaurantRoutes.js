const mongoose = require("mongoose");
const express = require("express");
const restaurantApi = express.Router();
const restaurants = require("../Model/restaurantSchema");
restaurantApi.use(express.json());

restaurantApi.get("/getAllRestaurants", async (req, res) => {
  const restaurantsArray = await restaurants.find();
  res.send(restaurantsArray);
});

module.exports = restaurantApi;
