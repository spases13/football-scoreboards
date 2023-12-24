"use client";

import React from "react";
import "./styles/LaLiga.scss";
import Image from "next/image";

import logo from "./assets/laliga_logo.png";
import home_team from "./assets/home_team_logo.png"
import away_team from "./assets/away_team_logo.png"


const LaLiga = () => {
  const date = new Date();
  const time = date.getHours() + ":" + date.getMinutes();

  return (
    <div className="Scoreboard LaLiga">
      <div className="left_part">
        <div className="logo">
          <Image src={logo} alt="" />
        </div>
        <div className="left_time_part">
          <div className="time">
            <h1 className="time_text">{time}</h1>
          </div>
          {/* Temporary  */}
          <div className="add_time">+5</div>
        </div>
      </div>
      <div className="teams">
        <div className="home team">
          <Image src = {home_team} alt="" />
        </div>
        <div className="away team">
          <Image src = {away_team} alt="" />
        </div>
      </div>
      <div className="teams_colors">
        <div className="home team_color">
          <div className="color color1"></div>
          <div className="color color2"></div>
        </div>
        <div className="away team_color">
          <div className="color color1"></div>
          <div className="color color2"></div>
        </div>
      </div>
      <div className="scores">
        <div className="home team_score">
          <h1 className="time_text">0</h1>
        </div>
        <div className="away team_score">
          <h1 className="time_text">1</h1>
        </div>
      </div>
    </div>
  );
};

export default LaLiga;
