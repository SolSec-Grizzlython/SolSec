import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Competitions.css";
import CompetitionsHeaderCards from "./CompetitionsHeaderCards/CompetitionsHeaderCards";
import CompetitionCard from "./CompetitionCards/CompetitionCard";

export default function Competitions() {
  return (
    <>
      <Navbar />
      <section className="competitions-container">
        <div className="start-competing-container">
          <div className="competition-heading">Start Competing</div>
          <div className="competitions-box">
            <div className="competitions-info">
              <div className="competition-header-card">
                <CompetitionsHeaderCards />
              </div>
              <div className="competitions-card">
                <CompetitionCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
