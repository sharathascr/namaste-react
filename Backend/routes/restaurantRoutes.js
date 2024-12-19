const mongoose = require("mongoose");
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

module.exports = restaurantRoutes;
