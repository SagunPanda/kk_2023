import React from "react";
import { useMediaQuery } from "react-responsive";
import "./about.css";
import Aboutcard from "./aboutcard";
import WolfSvg from "./WolfSvg";
import WolfSvgMob from "./WolfSvgMob";
import AboutGlow from "./AboutGlow";
import AboutBox from "./AboutBox";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <section className="about-us" id="about">
        <div className="about-us-top">
          {isMobile ? <WolfSvgMob /> : <WolfSvg />}
          <div className="start-section start-section-aboutus">
            <h1 style={{ color: "white" }}>ABOUT US</h1>
            <div className="underline"></div>
          </div>
          <div className="about-card-container">
            <Aboutcard />
          </div>
          {isMobile || <AboutGlow />}
        </div>
        <div className="about-boxes">
          <div className="about-boxes-rectangle" />
          <AboutBox
            title={"MISSION"}
            content={`Welcome to our game company, where we're on a mission to rock the gaming world! 🚀🎮 Embracing blockchain and the metaverse, we're giving players the power to truly own and rule their digital lives. Get ready for a gaming revolution! 🌟💥 #GameChangers #OwnYourWorld #ConquerMars`}
          />
          <AboutBox
            title={"VISION"}
            content={`We're leveling up the gaming world! 🚀🎮 Our vision is to lead in web3 and blockchain games, with a metaverse owned by YOU. Explore limitless virtual realms, own assets, and rule your digital domain! 💪🌐 Gaming reimagined for the digital age! 🌟 #GameOn #OwnYourMetaverse`}
          />
        </div>
      </section>
    </>
  );
};
export default About;
