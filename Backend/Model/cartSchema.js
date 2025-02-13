//create cart schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for below object
const cartSchema = new Schema({
  rating: {
    aggregatedRating: {
      rating: String,
      ratingCount: String,
      ratingCountV2: String,
    },
    id: String,
    name: String,
    category: String,
    description: String,
    imageId: String,
    inStock: Number,
    isVeg: Number,
    defaultPrice: Number,
    _id: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
