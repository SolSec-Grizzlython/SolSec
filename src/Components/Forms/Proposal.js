import { React, useState } from "react";
import DatePicker from "react-datepicker";
import InputBox from "../InputBox/InputBox";

import style from "./Proposal.module.css";
import "react-datepicker/dist/react-datepicker.css";

const Proposal = () => {
    const [startDate, setStartDate] = useState('');

    return (
        <>
            <div className={style.container}>
                <form className={style.form}>
                    <h1>About the Protocol</h1>

                    <label>Email ID</label>
                    <InputBox />


                    <h1>About the Competition</h1>
                    <label>Name of the Competition</label>
                    <InputBox />
                    <label>Description of the Competition</label>
                    <InputBox />
                    <label>Repository Link</label>
                    <InputBox />
                    <label>Total Prize Pool (USDC) </label>
                    <InputBox />
                    <div className={style.aboutComp}>
                        <div >
                            <label>Start Date</label>
                            <DatePicker className={style.dateinput} selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div >
                            <label>Duration</label>
                            <InputBox />
                        </div>
                    </div>
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
        </>
    )
}

export default Proposal;