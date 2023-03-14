import React from "react";
import InputBox from "../InputBox/InputBox";
import style from "./Proposal.module.css";

const Proposal = () => {

    return (
        <div className={style.container}>
            <form className={style.form}>
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
                <div className={style.aboutComp}>
                    <div >
                        <label>Start Date</label>
                        <InputBox />
                    </div>
                    <div >
                        <label>Start Time</label>
                        <InputBox />
                    </div>
                </div>
                <div className={style.aboutComp}>
                    <div>
                        <label>End Date</label>
                        <InputBox />
                    </div>
                    <div >
                        <label>End Time</label>
                        <InputBox />
                    </div>
                </div>




                <label>Total Prize Pool (USDC) </label>
                <InputBox />
                <h1>% Distribution</h1>
                <div className={style.aboutComp}>
                    <div>
                        <label> High Findings</label>
                        <InputBox />
                    </div>
                    <div>

                        <label>Low Findings</label>
                        <InputBox />
                    </div>
                </div>
                <div className={style.aboutComp}>
                    <div>
                        <label>Quality Assurance Report Link</label>
                        <InputBox />
                    </div>
                    <div>

                        <label>Gas Report Link</label>
                        <InputBox />
                    </div>
                </div>

                <div className={style.footer}>
                    <button type="submit" className={style.footerleft}>Submit</button>
                </div>


            </form>
        </div>
    )
}

export default Proposal;