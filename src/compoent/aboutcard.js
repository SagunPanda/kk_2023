import React from "react";
import { useMediaQuery } from "react-responsive";
import "./card.css";

const Aboutcard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="aboutcard">
      {isMobile || <div className="line"></div>}
      <div className="card-content">
        <p className="aboutcard-p">
          Welcome to our innovative gaming company! We're all about Kanine Klans, an epic web 3.0 game with NFT, AR-VR, and metaverse tech. Our genius team of Game Designers, Developers, and 3D Artists, Product Managers are on a mission to blow your mind! Get ready for a game like no other!

          Kanine Klans is where strategy, adventure, and community unite. You'll own your pack of unique and valuable digital Kanines, exploring a mind-blowing AR-VR world. And that's not all! The metaverse magic creates a vibrant community. Trade, compete, and build virtual homes with fellow players.

          Be part of this groundbreaking journey, where gaming gets taken to a whole new level. Join us now and let's create unforgettable gaming greatness together!

        </p>
      </div>
    </div>
  );
};

export default Aboutcard;
