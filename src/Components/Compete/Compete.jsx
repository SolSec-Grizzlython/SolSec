import Navbar from "../Navbar/Navbar";
import "./Compete.css";

export default function Compete() {
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
              <div className="protocol-images">
                <img className="protocol-img" src="" alt="" />
              </div>
              <div className="protocol-content"></div>
            </div>
            <div className="price-details"></div>
          </div>
        </div>
      </section>
    </>
  );
}
