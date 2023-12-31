"use client";

import { useState } from "react";
import "./styles/Roshn.scss";

import logo from "./assets/Roshn_Saudi_League_Logo.svg.png";
import home_team_logo from "./assets/al-ittihad.png";
import away_team_logo from "./assets/al-nassr.png";
import bg from "./assets/bg.png";
import Image from "next/image";

const Roshn = () => {
  const [isArabic, setIsArabic] = useState(false);

  const alternateTeamName = () => {
    setTimeout(() => {
      setIsArabic(!isArabic);
    }, 4000);
  };

  alternateTeamName();

  return (
    <>
      <div className="bg">
        <Image src={bg} alt="bg"></Image>
      </div>
      <div className="Scoreboard">
        <div className="logo_section">
          <Image src={logo} alt="Roshn_Logo"></Image>
        </div>
        <div className="score_section">
          <div className="teams_logos">
            <div className="home_team team">
              <Image src={home_team_logo} alt="Roshn_Logo"></Image>
            </div>
            <div className="away_team team">
              <Image src={away_team_logo} alt="Roshn_Logo"></Image>
            </div>
          </div>
          <div className="teams_names">
            <div className="home_team team">
              {isArabic ? (
                <span className="team_name_arabic">الإتحاد</span>
              ) : (
                <span className="team_name">ITT</span>
              )}
            </div>
            <div className="away_team team">
              {isArabic ? (
                <span className="team_name_arabic">النصر</span>
              ) : (
                <span className="team_name">NAS</span>
              )}
            </div>
          </div>
        </div>
        <div className="time_section_and_score_values">
          <div className="teams_scores_values">
            <div className="away_team team">
              <span className="away_team_score_value">1</span>
            </div>
            <div className="home_team team">
              <span className="home_team_score_value">2</span>
            </div>
          </div>
          <div className="time_section">
            <span className="regular_time_value">
              52<span className="two_dots">:</span>69
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roshn;
