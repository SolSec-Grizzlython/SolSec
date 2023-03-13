import React, {useState} from "react";
import style from "./Login.module.css";
import InputBox from "../InputBox/InputBox";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <form>
                <label>Email ID*</label>
                <InputBox type="text" placeholder="Enter Your Email ID" />
                <label>Password*</label>
                <InputBox type="password" placeholder="Enter Your Password" />
                <p className={style.forgot}>Forgot Password?</p>
                <button className={style.loginBtn} type="submit">Login</button>
                <p className={style.signup}>Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    );
    };

export default Login;