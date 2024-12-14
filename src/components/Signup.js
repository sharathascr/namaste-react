import React from "react";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup-page">
      <p className="signup-heading">Signup</p>
      <div className="signup-inputs">
        <input type="text" placeholder="Username..." />
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password..." />
        <button className="signup-btn">Signup</button>
      </div>
    </div>
  );
}

export default Signup;
