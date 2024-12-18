{
  `
    .login-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f4;
      }
      
      .login-content {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: center;
      }
      
      .login-heading {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      
      .create-account-text {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
      
      .create-text {
        color: #007bff;
        cursor: pointer;
      }
      
      .login-inputs input {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      
      .error-text {
        color: red;
        font-size: 0.8rem;
      }
      
      .login-btn {
        width: 100%;
        padding: 0.7rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
      
      .login-btn:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
      }
 ``import React from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = async (user) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:6060/api/users/login-user",
        user
      );
      alert(loginResponse.data.message);

      // Clear the form after successful login
      if (loginResponse.data.message === "login success") {
        reset();
        // Redirect the user (use navigate if routing is implemented)
        console.log("User logged in successfully");
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "An error occurred during login. Please try again."
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <p className="login-heading">Login</p>
        <p className="create-account-text">
          or <span className="create-text">create an account</span>
        </p>
        <form className="login-inputs" onSubmit={handleSubmit(handleLogin)}>
          {/* Email Input */}
          <input
            placeholder="Email..."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          {/* Password Input */}
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <button type="submit" className="login-btn" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
import React from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = async (user) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:6060/api/users/login-user",
        user
      );
      alert(loginResponse.data.message);

      // Clear the form after successful login
      if (loginResponse.data.message === "login success") {
        reset();
        // Redirect the user (use navigate if routing is implemented)
        console.log("User logged in successfully");
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "An error occurred during login. Please try again."
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <p className="login-heading">Login</p>
        <p className="create-account-text">
          or <span className="create-text">create an account</span>
        </p>
        <form className="login-inputs" onSubmit={handleSubmit(handleLogin)}>
          {/* Email Input */}
          <input
            placeholder="Email..."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          {/* Password Input */}
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <button type="submit" className="login-btn" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
`;
}
