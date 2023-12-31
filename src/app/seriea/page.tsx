"use client";

import { useState } from "react";
import "./styles/Seriea.scss";

const Seriea = () => {
  const [home_team_score, setHome_team_score] = useState(0);
  const [away_team_score, setAway_team_score] = useState(0);

  return (
    <div className="Scoreboard">
      <div className="score_section">
        <div className="home_team team">
          <h1 className="team_name_value">ROM</h1>
        </div>
        <div className="score">
          <div className="home_team_color team_color"></div>
          <h1 className="score_value">{`${home_team_score} - ${away_team_score}`}</h1>
          <div className="away_team_color team_color"></div>
        </div>

        <div className="away_team team">
          <h1 className="team_name_value">NAP</h1>
        </div>
      </div>
      <div className="time_section">
        <h1 className="time_value">52:56</h1>
      </div>
    </div>
  );
};

export default Seriea;
