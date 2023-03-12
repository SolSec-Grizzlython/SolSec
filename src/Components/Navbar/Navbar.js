import React from "react";
import style from "./Navbar.module.css";
import logo from "./assets/discord.svg";

const Navbar = () => {
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
            <button className={style.login}>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
