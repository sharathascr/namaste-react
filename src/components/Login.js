import React from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = async (user) => {
    const loginResponse = await axios.post(
      "http://localhost:6060/api/users/login-user",
      user
    );
    alert(loginResponse.data.message);
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
              required: true,
            })}
          />
          {errors.phoneNumber?.type === "required" && (
            <p>phone number is required</p>
          )}
          <input
            placeholder="password"
            type="password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password?.type === "required" && <p>Password is required</p>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
