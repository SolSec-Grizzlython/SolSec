import React from "react";
import Proposal from "../Forms/Proposal";
import style from "./StartProposal.module.css";

const StartProposal = () => {
    return(
        <div className={style.container}>
            <h1>Submit a Proposal</h1>
            <p>Desc</p>
            <Proposal />
        </div>
    )
}

export default StartProposal;