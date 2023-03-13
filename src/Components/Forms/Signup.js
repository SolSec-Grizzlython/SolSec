import React, {useState} from "react";
import style from "./Login.module.css";
import InputBox from "../InputBox/InputBox";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [walletAddress,setWalletAddress] = useState("");
    const [role, setRole] = useState("protocol");

    const handleSubmit = (e) => {
        console.log("called1");
        e.preventDefault();
        axios.post("http://localhost:4000/auth/signup", {email: email,password: password,name: name,walletAddress: walletAddress, role: role})
        .then((res) => {
            localStorage.setItem("token", res.data.token);

        }).catch((err) => {
            console.log(err.response.data.message, ", status", err.response.status);
        });
    }

    
    return (

        <div className={style.modal}>
        <div className={style.modalContent}>
            <Link className={style.close} to="/">&times;</Link>
            <h1>Signup</h1>
            <section>        <div>
            <form onSubmit={handleSubmit}>
                <label>Name*</label>
                <InputBox type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>
                <label>Email ID*</label>
                <InputBox type="text" placeholder="Enter Your Email ID" onChange={(e) => setEmail(e.target.value)}/>
                <label>Wallet Address*</label>
                <InputBox type="text" placeholder="Enter Your Wallet Address" onChange={(e) => setWalletAddress(e.target.value)} />
                <label>Create Password*</label>
                <InputBox type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}/>

                <label>Role*</label>
               

                <button className={style.loginBtn} type="submit">Submit</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div></section>
        </div>
    </div>

    );
    };

export default Register;