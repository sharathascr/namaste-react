import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContextProvider";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { appState, appDispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:6060/api/users/login-user",
        user
      );
      alert(loginResponse.data.message);
      if (loginResponse.data.message === "Login successful") {
        reset();
        appDispatch({ type: "SET_LOGGEDIN_STATUS", payload: true });
        appDispatch({
          type: "SET_LOGGEDIN_USER",
          payload: loginResponse.data.user.username,
        });
        //Redirect the user (use navigate if routing is implemented)
        navigate("/");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "An error occurred during login Please try again"
      );
    }
  };
  return (
    <div className="login-page">
      <div className="login-content">
        <p className="login-heading"> Login</p>
        <p className="create-account-text">
          or <span className="create-text">create an account</span>
        </p>
        <form className="login-inputs" onSubmit={handleSubmit(handleLogin)}>
          <input
            placeholder="email..."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
          <input
            placeholder="password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be 8 characters",
              },
            })}
          />
          <div id="eyeSymbol">
            {showPassword ? (
              <div onClick={() => setShowPassword(!showPassword)}>
                <i className="fa-regular fa-eye"></i>
              </div>
            ) : (
              <div onClick={() => setShowPassword(!showPassword)}>
                <i className="fa-regular fa-eye-slash"></i>
              </div>
            )}
          </div>
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}
          <button type="submit" className="login-btn" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
