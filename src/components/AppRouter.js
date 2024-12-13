import React from "react";
import Login from "./Login.JS";
import Signup from "./Signup";
import Cart from "./Cart";
import { Route, Routes } from "react-router";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRouter;
