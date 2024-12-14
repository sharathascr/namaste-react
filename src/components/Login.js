import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
        <p className="login-heading"> Login</p>
        <p className="create-account-text">
          or <span className="create-text">create an account</span>
          <div>
            <input placeholder="Phone Number" />
            <input placeholder="password" />
            <button className="login-btn">Log</button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Login;
