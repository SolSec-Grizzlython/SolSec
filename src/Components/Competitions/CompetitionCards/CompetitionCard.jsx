import "./CompetitionCard.css";
import React from "react";
import img from "./download.png";

const CompetitionCard = () => {
  const placeholderData = {
    heading: "AB",
    prize: "70000",
    startdate: "Starts On: 26 Jun, 2021 03:00 PM",
    enddate: " Ends On: 26 Jun, 2021 03:00 PM",
  };
  return (
    <div className="competition-card-container">
      <div className="competitions-card-images">
        <img className="competition-card-img" src={img} alt="" />
      </div>
      <div className="competition-card-details">
        <div className="competition-card-name">{placeholderData.heading}</div>
        <div className="competition-card-content">
          ${placeholderData.prize} <br />
          {placeholderData.startdate} <br /> {placeholderData.enddate}
        </div>
        <button className="competition-card-btn">Start</button>
      </div>
    </div>
  );
};

export default CompetitionCard;
