import React from "react";
import "../styles/index.css";

export const Header = () => {
  return (
    <div className="nav-container">
      <img
        className="nav-logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        alt="nav-logo"
      />
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
