const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const restaurantApi = require("./Backend/routes/restaurantRoutes");
const userRoutes = require("./Backend/routes/usersRoutes");

dotenv.config();

const app = express();
app.use(cors());

mongoose.connect(
  "mongodb+srv://cdb27:cdb27@atlascluster.e4ptmwb.mongodb.net/swiggy?retryWrites=true&w=majority&appName=AtlasCluster"
);

const db = mongoose.connection;
db.on("open", () => console.log("MongoDb connection successful"));
db.on("error", (err) => console.log("Error ion connection", err));

app.use("/api/restaurants", restaurantApi);
app.use("/api/users", userRoutes);

app.listen(6060, () => console.log(`Server is running on 6060...`));
