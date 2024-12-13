const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose.connect(
  "mongodb+srv://cdb27:cdb27@atlascluster.e4ptmwb.mongodb.net/swiggy?retryWrites=true&w=majority&appName=AtlasCluster"
);

const db = mongoose.connection;
db.on("open", () => console.log("MongoDb connection successful"));
db.on("error", (err) => console.log("Error ion connection", err));

app.listen(5000, () => console.log("Server is running on 5000..."));
