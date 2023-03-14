import Navbar from "../Navbar/Navbar";
import "./Compete.css";
import image from "./ssl-2890762__340.jpeg";
import { Link } from "react-router-dom";

export default function Compete() {
  const Data = {
    prize: "$20,000",
    startdate: "20th March 2021",
    enddate: "20th March 2021",
    duration: "20th March 2021"
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
              <div className="protocol-content">Details</div>
            </div>
            <div className="price-details">
              <div className="pool-prize">Prize Pool: {Data.prize}</div>
              <div className="competition-dates">
                <div className="vertical-line"></div>
                <div className="competition-duration"> Start Date: {Data.startdate} <br /> End Date: {Data.enddate} <br /> Duration: {Data.duration} </div>
              </div>
              <div className="buttons">
                <button className="findings"><Link className="findingform" to="/findingform">Submit Findings</Link></button>
                <button className="repository">View Repository</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
