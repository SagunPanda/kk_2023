import React from "react";
import "./timeline.css";
import start from "../assets/start.png";
import darkline from "../assets/darkline.png";
import Ellipse from "../assets/Ellipse.png";
import lightline from "../assets/lightline.png";
import Ellipse2 from "../assets/Ellipse2.png";
import location from "../assets/location.png";
import mars from "./mars-img.jpeg";
import marsMobile from "./mars-img-mobile.jpeg";
import { useMediaQuery } from "react-responsive";


const Timeline = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <section className="timeline" id="timeline">
        <img src={isMobile ? marsMobile : mars} className="mars-img" />
        <div className="left-end-side">
          <div className="text-area">
            <h5 className="first-line">OUR SCHEDULED </h5>
            <h1 className="second-line">TIMELINE </h1>
            <h5 className="third-line">TO LAUNCH</h5>
          </div>
        </div>
        <div className="right-end-side">
          <div className="time">
            <div className="row">
              <div className="image-dot">
                <img className="start" src={start} alt="start" />
                <img className="darkline" src={darkline} alt="line" />
              </div>
              <div className="month-content">
                <h1>JUNE </h1>
                <div className="content">
                  Beta Version Ready. - @Game Development team.
                  <br />
                  QA testing
                  <br />
                  NFT development
                  <br />
                  NFT Marketplace development
                  <br />
                  White Paper
                  <br />
                  Community Building - AMA, Session
                </div>
              </div>
            </div>
          </div>

          <div className="time">
            <div className="row-n">
              <div className="image-dot">
                <img className="Ellipse" src={Ellipse} alt="Ellipse" />
                <img className="lightline" src={lightline} alt="line" />
              </div>
              <div className="month-content-n">
                <h1>AUGUST</h1>
                <div className="content">
                  User Testing
                  <br />
                  Community Building - AMA, Twitter Spaces, Hupe Start
                  <br />
                  Partnerships - Strategic(Blockchain, projects)
                </div>
              </div>
            </div>
          </div>

          <div className="time">
            <div className="row-n">
              <div className="image-dot">
                <img className="ellipse2" src={Ellipse2} alt="ellipse" />
                <img className="lightline" src={lightline} alt="line" />
              </div>
              <div className="month-content-n">
                <h1>SEPTEMBER</h1>
                <div className="content">
                  Feedback & changes accordingly
                  <br />
                  Seed Round open
                  <br />
                  MVP Launch - Amazon, PlayStore, Itch Apple Store - Early User
                  Access
                  <br />
                  Community Building - Offl ine events, Sessions, AMAs
                </div>
              </div>
            </div>
          </div>

          <div className="time">
            <div className="row-n">
              <div className="image-dot">
                <img className="Ellipse2" src={Ellipse2} alt="Ellipse" />
                <img className="lightline" src={lightline} alt="line" />
              </div>
              <div className="month-content-n">
                <h1>OCTOBER</h1>
                <div className="content">
                  Free Gaming lobby open for quest
                  <br />
                  Community Building - Hype of NFTs
                  <br />
                  Influencer Marketing
                </div>
              </div>
            </div>
          </div>

          <div className="time">
            <div className="row">
              <div className="image-dot2">
                <img className="location" src={location} alt="location" />
              </div>
              <div className="month-content-m">
                <h1>NOVEMBER</h1>
                <div className="content">
                  NFT SALE
                  <br />
                  Player Start Playing
                  <br />
                  Private Sale - Round 1 open
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
