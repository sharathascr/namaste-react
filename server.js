const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const restaurantApi = require("./Backend/routes/restaurantRoutes");
const userRoutes = require("./Backend/routes/usersRoutes");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("open", () => console.log("MongoDb connection successful"));
db.on("error", (err) => console.log("Error ion connection", err));

app.use("/api/restaurants", restaurantApi);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on ${process.env.PORT}...`)
);
