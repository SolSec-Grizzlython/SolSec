import React, { useState } from "react";
import style from "./Login.module.css";
import InputBox from "../InputBox/InputBox" 
import Modal from "../Modal/Modal";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err.response.data.message, ", status", err.response.status);
      });
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <Link to="/" className={style.close}>
          &times;
        </Link>
        <h1>Login</h1>
        <section>
          {" "}
          <div>
            <form onSubmit={handleSubmit}>
              <label>Email ID*</label>
              <InputBox
                type="text"
                placeholder="Enter Your Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password*</label>
              <InputBox
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className={style.forgot}>Forgot Password?</p>
              <button className={style.loginBtn} type="submit">
                Login
              </button>
              <p className={style.signup}>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
