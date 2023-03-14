import React from "react";
import "./CompetitionsCard.css";
// import img from "../Images/download.png";

const CompetitionsCard = ({name, details, image}) => {
  return (
    <div className="competitions-card-container">
      <div className="competitions-card-images">
        <img className="competitions-card-img" src={image} alt="" />
      </div>
      <div className="competitions-card-details">
        <div className="competitions-card-name">{name}</div>
        <div className="competitions-card-content">{details}</div>
      </div>
    </div>
  );
};

export default CompetitionsCard;
