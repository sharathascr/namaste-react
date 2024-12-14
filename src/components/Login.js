import React from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
    console.log("Login Submitted");
  };
  return (
    <div className="login-page">
      <div className="login-content">
        <p className="login-heading"> Login</p>
        <p className="create-account-text">
          or <span className="create-text">create an account</span>
          <form className="login-inputs" onSubmit={handleSubmit(handleLogin)}>
            <input
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
            {errors.phoneNumber?.type === "required" && (
              <p>phone number is required</p>
            )}
            <input
              placeholder="password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === "required" && (
              <p>Password is required</p>
            )}
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default Login;
