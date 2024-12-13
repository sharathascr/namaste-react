import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login.JS";
import Signup from "./Signup";
import Cart from "./Cart";

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
