import React from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:6060/api/users/login-user",
        user
      );
      alert(loginResponse.data.message);
      if (loginResponse.data.message === "login successful") {
        reset();
        //Redirect the user (use navigate if routing is implemented)
        console.log("User logged in successfully");
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
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be 8 characters",
              },
            })}
          />
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
