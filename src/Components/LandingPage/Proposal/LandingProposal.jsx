import "./LandingProposal.css";
import img from "./Images/Rectangle 1.png";

export default function LandingProposal() {
  return (
    <>
      <section className="landing-proposal-container">
        <div className="landing-proposal-box">
          <div className="landing-proposal-image">
            <img className="landing-proposal-img" src={img} alt="" />
          </div>
          <div className="landing-proposal-details">
            <div className="landing-proposal-heading">Submit your proposal</div>
            <div className="landing-proposal-content">Submit your proposal by staking a minimal amount, if you are a start up and don’t have the required money to hold a competition, you can apply for our “” </div>
          <button className="landing-proposal-btn">Submit your proposal</button>
          </div>
        </div>
      </section>
    </>
  );
}
