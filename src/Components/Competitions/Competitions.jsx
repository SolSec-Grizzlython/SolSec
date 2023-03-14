import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Competitions.css";
import CompetitionCard from "./CompetitionCards/CompetitionCard";

export default function Competitions() {
  const placeholderData = [
    {
      heading: "AB",
      prize: "70000",
      startdate: "Starts On: 26 Jun, 2021 03:00 PM",
      duration: " Duration: 12days",
      desc: "ajdkghjkah",
    },
    {
      heading: "CD",
      prize: "70000",
      startdate: "Starts On: 26 Jun, 2021 03:00 PM",
      duration: " Duration: 12days",
      desc: "ajdkghjkah",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="competitions-container">
        <div className="start-competing-container">
          <div className="competition-heading">Start Competing</div>
          <div className="competitions-box">
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Ongoing Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {placeholderData.map((contest) => (
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.heading}
                      prize={contest.prize}
                      startdate={contest.startdate}
                      duration={contest.duration}
                      desc={contest.desc}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Practice Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {placeholderData.map((contest) => (
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.heading}
                      prize={contest.prize}
                      startdate={contest.startdate}
                      duration={contest.duration}
                      desc={contest.desc}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Upcoming Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {placeholderData.map((contest) => (
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.heading}
                      prize={contest.prize}
                      startdate={contest.startdate}
                      duration={contest.duration}
                      desc={contest.desc}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Past Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {placeholderData.map((contest) => (
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.heading}
                      prize={contest.prize}
                      startdate={contest.startdate}
                      duration={contest.duration}
                      desc={contest.desc}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
