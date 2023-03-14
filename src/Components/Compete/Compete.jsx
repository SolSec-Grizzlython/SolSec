import Navbar from "../Navbar/Navbar";
import "./Compete.css";
import image from "./ssl-2890762__340.jpeg";
import { Link } from "react-router-dom";

export default function Compete() {
  const Data = {
    prize: "$20,000",
    startdate: "20th March 2021",
    enddate: "20th March 2021",
    duration: "20th March 2021",
  };
  const Prize = {
    pool:" $250 USDC",
    HMawards: "$50 USDC",
    QAawards:"$200 USDC",
    gasAwards:"$0 USDC"
  }
  return (
    <>
      <Navbar />
      <section className="compete-container">
        <div className="compete-box">
          <div className="competition-name">Name of the competition</div>
          <div className="protocol-name">Protocol name</div>
          <div className="competition-status">PAST</div>
          <div className="competition-details">
            <div className="protocol-details">
              <img className="protocol-img" src={image} alt="" />
              <div className="protocol-content">
                <div className="details-header">Details</div>
                <div className="prizes-veticleLine">
                  <div className="big-vertical-line"></div>
                  <div className="proposal-prizes">
                    Total Prize Pool: {Prize.pool} <br /> HM awards: {Prize.HMawards}
                    <br />
                    QA report awards: {Prize.QAawards} <br />
                    Gas report awards: {Prize.gasAwards}
                  </div>
                </div>
                <div className="note-header">Note</div>
                <div className="proposal-detail-content"> For this contest, gas optimizations are out of scope. The zkSync team will not be awarding prize funds for gas-specific submissions. For this contest, while the abs.com is out of scope, zkSync team may reward an additional bounty for valid bugs found in it. Such bounty if any will not come from the prize pool, but will be paid on top. Automated Findings / Publicly Known Issues. Automated findings output for the contest can be found  within an hour of contest opening. Anything included in the automated findings output is considered a publicly known issue and is ineligible for awards.</div>
              </div>
            </div>
            <div className="price-details">
              <div className="pool-prize">Prize Pool: {Data.prize}</div>
              <div className="competition-dates">
                <div className="vertical-line"></div>
                <div className="competition-duration">
                  {" "}
                  Start Date: {Data.startdate} <br /> End Date: {Data.enddate}{" "}
                  <br /> Duration: {Data.duration}{" "}
                </div>
              </div>
              <div className="buttons">
                <button className="findings">
                  <Link className="findingform" to="/findingform">
                    Submit Findings
                  </Link>
                </button>
                <button className="repository">View Repository</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
