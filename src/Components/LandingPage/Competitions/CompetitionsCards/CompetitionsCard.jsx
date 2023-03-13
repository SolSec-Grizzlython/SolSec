import React from "react";
import "./CompetitionsCard.css";
import img from "../Images/download.png";

const CompetitionsCard = () => {
  return (
    <div className="competitions-card-container">
      <div className="competitions-card-images">
        <img className="competitions-card-img" src={img} alt="" />
      </div>
      <div className="competitions-card-details">
        <div className="competitions-card-name">Ongoing Competitions</div>
        <div className="competitions-card-content">sd chsks zcjk jkc bajk jka kj jk kj</div>
      </div>
    </div>
  );
};

export default CompetitionsCard;
