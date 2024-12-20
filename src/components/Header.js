import React, { useContext } from "react";
import { SWIGGY_LOGO_URL } from "../utils/contants";
import "../styles/index.css";
import "../styles/Header.css";
import { Link } from "react-router";
import { AppContext } from "../context/AppContextProvider";

export const Header = () => {
  const { appState, appDispatch } = useContext(AppContext);
  return (
    <div className="nav-container">
      <Link to="/">
        <img className="nav-logo" src={SWIGGY_LOGO_URL} alt="nav-logo" />
      </Link>
      <ul className="nav-items">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        {!appState.isLoggedIn ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <span className="user-icon">
                <i className="fa-solid fa-user"></i>
              </span>
              {appState.loggedInUser}
            </li>
            <li
              onClick={() =>
                appDispatch({ type: "SET_LOGGEDIN_STATUS", payload: false })
              }
            >
              logout
            </li>
          </>
        )}
        <li>
          {" "}
          <Link to={"/cart"} className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
