import React from "react";
import "./about.css";
import Aboutcard from './aboutcard';

const About = () => {
  return (
    <>
      <section className="about-us" id="about">
        <div className="start-section start-section-aboutus">
          <h1 style={{  color: "white"  }}>ABOUT US</h1>
          <div className="underline"></div>
        </div>
        <div className="about-card-container">
          <Aboutcard />
        </div>
      </section>
    </>
  );
};
export default About;
