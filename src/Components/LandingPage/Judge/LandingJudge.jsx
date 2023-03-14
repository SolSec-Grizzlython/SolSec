import "./LandingJudge.css";
import img from "./Images/Rectangle 2.png";

export default function LandingJudge() {
    return (
        <>
         <section className="landing-judge-container" id="landing-judge">
            <div className="landing-judge-box">
                <div className="landing-judge-image">
                    <img src={img} alt="" className="landing-judge-img" />
                </div>
                <div className="landing-judge-details">
                    <div className="landing-judge-heading">Be a Judge</div>
                    <div className="landing-judge-content">Submit your proposal by staking a minimal amount, if you are a start up and don’t have the required money to hold a competition, you can apply for our “” </div>
                    <button className="landing-judge-btn">Apply Now</button>
                </div>
            </div>
         </section>
        </>
    )
}