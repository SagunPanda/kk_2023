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
          Kanine Klan has a unique ecosystem that allows the players to enter
          any race, for minimal price or free. With this ecosystem model , the
          gameplay is very competitive ,however ,the reward are still lucrative.
          Players compete against many others racers to earn a top position .
          All players inside the game earn $kk tokens, the platform’s utility
          token.Kanine Klan has a unique ecosystem that allows the players to
          enter any race, for minimal price or free. With this ecosystem model
          the gameplay is very competitive ,however ,the reward are still
          lucrative. Players compete against many others racers to earn a top
          position . All players inside the game earn $kk tokens, the platform’s
          utility token.
        </p>
      </div>
    </div>
  );
};

export default Aboutcard;
