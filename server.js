const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const restaurantApi = require("./Backend/routes/restaurantRoutes");
const userRoutes = require("./Backend/routes/usersRoutes");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("open", () => console.log("MongoDb connection successful"));
db.on("error", (err) => {
  console.log("Error in mongodb connection", err);
  process.exit(1);
});

app.use("/api/restaurants", restaurantApi);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
