const mongoose = require("mongoose");
const Item = require("./itemSchema");

const itemSchema = new mongoose.Schema({
  username: String,
  id: String,
  name: String,
  category: String,
  inStock: Number,
  isVeg: Number,
  price: Number,
  description: String,
});

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    cart: [itemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
