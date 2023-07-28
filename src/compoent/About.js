import React from "react";
import { useMediaQuery } from "react-responsive";
import "./about.css";
import Aboutcard from "./aboutcard";
import WolfSvg from "./WolfSvg";
import WolfSvgMob from "./WolfSvgMob";
import AboutGlow from "./AboutGlow";
import Commoncard from "./Commoncard";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <section className="about-us" id="about">
        {isMobile ? <WolfSvgMob /> : <WolfSvg />}
        <div className="start-section start-section-aboutus">
          <h1 style={{ color: "white" }}>ABOUT US</h1>
          <div className="underline"></div>
        </div>
        <div className="about-card-container">
          <Aboutcard />
        </div>
        {/* <div className="needcard">
          <Commoncard/>
        </div> */}
        {isMobile || <AboutGlow />}
      </section>
    </>
  );
};
export default About;
