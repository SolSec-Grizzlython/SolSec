import React, {useState} from "react";
import style from "./Login.module.css";
import InputBox from "../InputBox/InputBox";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [walletAddress,setWalletAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/auth/signup", {email: email,password: password,name: name,walletAddress: walletAddress})
        .then((res) => {
            localStorage.setItem("token", res.data.token);

        }).catch((err) => {
            console.log(err.response.data.message, ", status", err.response.status);
        });
    }

    
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

export default Register;