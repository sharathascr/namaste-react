import React from "react";
import Login from "./Login.JS";
import Signup from "./Signup";
import Cart from "./Cart";
import { Route, Routes } from "react-router";
import Home from "./Home";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRouter;
