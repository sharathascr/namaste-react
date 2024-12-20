import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Restaurant from "./Restaurant";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/restaurants/:restaurantName" element={<Restaurant />} />
    </Routes>
  );
}

export default AppRouter;
