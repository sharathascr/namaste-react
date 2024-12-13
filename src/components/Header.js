import React from "react";
import { SWIGGY_LOGO_URL } from "../utils/contants";
import "../styles/index.css";
import "../styles/Header.css";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="nav-container">
      <img className="nav-logo" src={SWIGGY_LOGO_URL} alt="nav-logo" />
      <ul className="nav-items">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/login"} className="nav-link">
            login
          </Link>
        </li>
        <li>
          <Link to={"/signup"} className="nav-link">
            Signup
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
