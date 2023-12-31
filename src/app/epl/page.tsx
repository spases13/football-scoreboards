import React from 'react'
import "./styles/Epl.scss"
import Image from 'next/image';
import logo from "./assets/premierleague.png"

const Epl = () => {
  return (
    <div className="scoreboard">
      <Image className="logo" src={logo} alt=''></Image>
      <div className="time">
        <span>17:33</span>
      </div>
      <div className="score score1">
        <h1 className="team_name">CHE</h1>
        <h1 className="score_value">2</h1>
      </div>
      <div className="l3iba">
        <div className="tCont">
          <div className="t t1"></div>
          <div className="t t2"></div>
        </div>
      </div>
      <div className="score score2">
        <h1 className="team_name">WOL</h1>
        <h1 className="score_value">0</h1>
      </div>
    </div>
  );
}

export default Epl