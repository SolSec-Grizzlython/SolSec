import "./LandingCompetitions.css";
import CompetitionsCard from "./CompetitionsCards/CompetitionsCard";
import { BsArrowRight } from "react-icons/bs";

export default function LandingCompetitions(){
    return(
        <>
        <section className="landing-competitions-container" id="landing-competition">
         <div className="landing-competitions-box">
            <div className="landing-competitions-head">
                <h1 className="landing-competitions-heading">Start Competing</h1>
            </div>
            <div className="landing-competitions-cards">
                <div className="grid">
                  <CompetitionsCard/>
                  <CompetitionsCard/>
                  <CompetitionsCard/>
                  <CompetitionsCard/>
                </div>
            </div>
         </div>
        </section>
        </>
    )
}