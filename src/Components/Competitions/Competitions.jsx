import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Competitions.css";
import CompetitionCard from "./CompetitionCards/CompetitionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Competitions() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
              <div className="competitions-card">
                <Slider {...settings}>
                  <CompetitionCard />
                </Slider>
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Practice Competitions</p>
                </div>
              </div>
              <div className="competitions-card">
                <CompetitionCard />
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Upcoming Competitions</p>
                </div>
              </div>
              <div className="competitions-card">
                <CompetitionCard />
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Past Competitions</p>
                </div>
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
