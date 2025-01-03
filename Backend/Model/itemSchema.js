const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model("Item", itemSchema);
