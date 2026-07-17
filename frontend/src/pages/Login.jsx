import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../services/authService";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await loginUser(loginData);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save User Details
localStorage.setItem("userId", response.data.id);
localStorage.setItem("token", response.data.token);
localStorage.setItem("name", response.data.name);
localStorage.setItem("email", response.data.email);
localStorage.setItem("role", response.data.role);


      toast.success("Login Successful! 🎉");

      const role = response.data.role;

      setTimeout(() => {

        if (role === "ADMIN") {
          navigate("/admin-dashboard");
        }
        else if (role === "FACULTY") {
          navigate("/faculty-dashboard");
        }
        else {
          navigate("/student-dashboard");
        }

      }, 1500);

    } catch (error) {

      toast.error("Invalid Email or Password!");

      console.log(error);

    }
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;