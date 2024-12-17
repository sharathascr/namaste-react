const mongoose = require("mongoose");
const express = require("express");
const users = require("../Model/userSchema");
const userRoutes = express.Router();
const argon2 = require("argon2");

userRoutes.use(express.json());

//Get All Users
userRoutes.get("/getAllUsers", async (req, res) => {
  const users = await users.find();
  res.send(users);
});

//Create new user

userRoutes.post("/save-user", async (req, res) => {
  const { username, email, password } = req.body;
  //check if user is present in DB
  const isUser = await users.find({ email });
  if (isUser.length != 0) {
    res.send({ message: "User already existed" });
  } else {
    const hashpassword = await argon2.hash(password);
    const newUser = new users({ username, email, password: hashpassword });
    const response = await newUser.save();
    res.send(response);
  }
});

// login user
userRoutes.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  const [existingUser] = await users.find({ email });
  if (existingUser.length != 0) {
    const isMatch = await argon2.verify(existingUser.password, password);
    if (isMatch) {
      res.send({ message: "login success" });
    } else {
      res.send({ message: "Invalid password" });
    }
  } else {
    res.send({ message: "user does not exists" });
  }
});
module.exports = userRoutes;
