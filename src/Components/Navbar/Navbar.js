import React,{useState} from "react";
import style from "./Navbar.module.css";
import logo from "./assets/discord.svg";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [show, setShow] = useState();
  return (
    <div className={style.container}>
      <div className={style.title}>SolSec</div>
      <div className={style.navList}>
        <ul>
          <li>Competitions</li>
          <li>Submit Proposal</li>
          <li>Apply to be a Judge</li>
          <li>
            <div className={style.discord}>
              <img src={logo} alt="discord_logo" />
              Join our Discord
            </div>
          </li>
          <li>
            <button className={style.login} onClick={() => setShow(true)}>
              Login
            </button>
            <Modal show={show} closeModal={() => setShow(false)} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
