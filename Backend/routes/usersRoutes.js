const mongoose = require("mongoose");
const express = require("express");
const users = require("../Model/userSchema");
const userRoutes = express.Router();

userRoutes.use(express.json());

//Get All Users
userRoutes.get("/getAllUsers", async (req, res) => {
  const users = await users.find();
  res.send(users);
});

//Create new user

userRoutes.post("/save-user", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new users({ username, email, password });
  await newUser.save();
  res.send({ message: "user saved" });
});

module.exports = userRoutes;
