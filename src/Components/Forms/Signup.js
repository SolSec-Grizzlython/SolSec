import React, {useState} from "react";
import style from "./Login.module.css";
import InputBox from "../InputBox/InputBox";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [walletAddress,setWalletAddress] = useState("");
    
    return (
        <div>
            <form>
                <label>Name*</label>
                <InputBox type="text" placeholder="Enter Your Name" />
                <label>Email ID*</label>
                <InputBox type="text" placeholder="Enter Your Email ID" />
                <label>Wallet Address*</label>
                <InputBox type="text" placeholder="Enter Your Wallet Address" />
                <label>Create Password*</label>
                <InputBox type="password" placeholder="Enter Your Password" />
                <button className={style.loginBtn} type="submit">Login</button>
                <p>Already have an account? <a href="#">Login</a></p>
            </form>
        </div>
    );
    };

export default Login;