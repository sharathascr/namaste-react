const mongoose = require("mongoose");
const express = require("express");
const User = require("../Model/userSchema");
const userRoutes = express.Router();
const argon2 = require("argon2");

userRoutes.use(express.json());

//Get All Users
userRoutes.get("/getAllUsers", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (error) {
    console.error("Error in fetching users", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

//Create new user

userRoutes.post("/save-user", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      console.log("Checking fields");
      res.status(400).send({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "user already existed" });
    } else {
      const hashpassword = await argon2.hash(password);
      const newUser = new User({ username, email, password: hashpassword });
      const savedUser = await newUser.save();
      res.status(201).send({ message: "user created successfully" });
    }
  } catch (error) {
    console.error("Error creating users", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// login user
userRoutes.post("/login-user", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).send({ message: "user does not exists" });
    }
    const isMatch = await argon2.verify(existingUser.password, password);
    if (isMatch) {
      res.status(200).send({ message: "Login sucessful" });
    } else {
      res.status(401).send({ message: "invalid password" });
    }
  } catch (error) {
    console.error("Error logging users", error);
    res.status(500).send({ message: "Internal server error" });
  }
});
module.exports = userRoutes;
