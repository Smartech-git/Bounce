import React, {useState, useEffect} from 'react';
import PauseButton from './PauseButton';
import Score from './Characters/Images/Score.png';
import HighScore from './Characters/Images/HighScore.png'

import "./InfoBar.css";

function InfoBar() {
   const [score, setScore] = useState("0000");
   const [highscore, setHighscore] = useState("0000");

    return (
        <div className="InfoBar">
          <PauseButton/>
          <div className="ScoreTab">
            <div className="Score">
              <img src={Score} alt="Score"></img>
              <span>{score}</span> 
            </div>
            <div className="HighScore">
              <img src={HighScore} alt="HighScore"></img>
              <span>{highscore}</span>
            </div>
          </div>
        </div>
    );
}

export default InfoBar;