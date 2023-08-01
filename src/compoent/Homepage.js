import React, { useState, useEffect } from "react";
import Card from "./card";
// import UnloackCard from "./UnlockCard";
import wolf from "../assets/wolf.svg";
import "./homepage.css";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import UnlockCard from "./UnlockCar";

const Homepage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const isReallyMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetchVisitorCount();
  }, []);

  const fetchVisitorCount = () => {
    axios
      .get("http://13.235.33.145:8000/users/count")
      .then((response) => {
        const count = response.data;
        setVisitorCount(count);
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });
  };

  return (
    <>
      <section className="hero-section" id="homepage">
        <div className="text-section">
          <div className="start-section start-section-top">
            <h2 className="start">KANINE KLANS</h2>
          </div>
          <div className="solid-line-first"></div>
          <div className="text-container">
            {isReallyMobile || (
              <h2 className="text-h1">COMING&nbsp;&nbsp;COMING</h2>
            )}
            <h1 className="text-h2">COMING SOON</h1>
          </div>
          <div className="solid-line-second"></div>
          <div className="end-section">
            <h2 className="end">TO THE MARS</h2>
          </div>
        </div>
        <div className="single-line-container">
          <div className="left-end">
            <Card />
          </div>
          <div className="right-end">
            {isMobile || (
              <div className="row-container">
                <div className="centered-content">
                  <UnlockCard />
                </div>
                <img className="wolf" src={wolf} alt="wolfImage" />
              </div>
            )}
          </div>
        </div>

        <div className="reg-count">
          <h3 className="reg-count-h3">{visitorCount}</h3>
          <h3 className="reg-count-h3-2">PRE REGISTRATION'S ARE DONE</h3>
        </div>
      </section>
    </>
  );
};
export default Homepage;
