import React from "react";
import InputBox from "../InputBox/InputBox";
import style from "./Proposal.module.css";

const Proposal = () => {
    
    return(
        <div className={style.container}>
            <form>
                <h1>About the Protocol</h1>
                <label>Name of the Protocol</label>
                <InputBox />
                <label>Description of the Protocol</label>
                <InputBox />
                <label>Email ID</label>
                <InputBox />
                <label>Website</label>
                <InputBox />
                <label>Twitter Link</label>
                <InputBox />
                <label>Discord Link</label>
                <InputBox />
                <label>GitHub Link</label>
                <InputBox />
                <label>Wallet Address</label>
                <InputBox />
                <h1>About the Competition</h1>
                <label>Start Date</label>
                <InputBox />
                <label>Start Time</label>
                <InputBox />
                <label>End Date</label>
                <InputBox />
                <label>End Time</label>
                <InputBox />
                <label>Total Prize Pool (USDC) </label>
                <InputBox />
                <label>% distribution for High Findings</label>
                <InputBox />
                <label>% distribution for Low Findings</label>
                <InputBox />
                <label>Quality Assurance Report</label>
                <InputBox />
                <label>Gas Report</label>
                <InputBox />

                <button type="submit">Submit</button>
                

            </form>
        </div>
    )
}

export default Proposal;