import React from "react";
import { SWIGGY_LOGO_URL } from "../utils/contants";
import "../styles/index.css";

export const Header = () => {
  return (
    <div className="nav-container">
      <img className="nav-logo" src={SWIGGY_LOGO_URL} alt="nav-logo" />
      <ul className="nav-items">
        <li>Home </li>
        <li>login </li>
        <li>About</li>
        <li>cart</li>
      </ul>
    </div>
  );
};

export default Header;
