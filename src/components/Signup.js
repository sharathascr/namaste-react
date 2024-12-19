import React from "react";
import "../styles/Signup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const handlesignup = async (user) => {
    try {
      console.log(user);
      const signupResponse = await axios.post(
        "http://localhost:6060/api/users/save-user",
        user
      );
      console.log(signupResponse);
      alert(signupResponse.data.message);
      if (signupResponse.data.message === "user created successfully") {
        reset();
        navigate("/login");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error ||
          "An error occurred during signup please try again"
      );
    }
  };

  return (
    <div className="signup-page">
      <p className="signup-heading">Signup</p>
      <form onSubmit={handleSubmit(handlesignup)} className="signup-inputs">
        <input
          type="text"
          placeholder="Username..."
          {...register("username", { required: "username is required" })}
        />
        {errors.username && (
          <p className="error-text">{errors.username.message}</p>
        )}
        <input
          type="email"
          placeholder="Email..."
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password..."
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "password must be 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}
        <button type="submit" className="signup-btn" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
