import React from "react";
import "../styles/Signup.css";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handlesignup = () => {
    console.log("Handled Signup");
  };

  return (
    <div className="signup-page">
      <p className="signup-heading">Signup</p>
      <form onSubmit={handleSubmit(handlesignup)} className="signup-inputs">
        <input
          type="text"
          placeholder="Username..."
          {...register("username", { required: true })}
        />
        {errors.username?.type === "required" && <p>Username is required</p>}
        <input
          type="email"
          placeholder="Email..."
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && <p>Email is required</p>}
        <input
          type="password"
          placeholder="Password..."
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && <p>Password is required</p>}
        <button className="signup-btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
