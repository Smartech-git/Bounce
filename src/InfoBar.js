import React, {useState, useEffect} from 'react';
import PauseButton from './PauseButton';
import "./InfoBar.css";

function InfoBar() {
   const [Score, setScore] = useState("0000");
   const [Highscore, setHighscore] = useState("0000");

    return (
        <div className="InfoBar">
          <PauseButton/>
          <div className="ScoreTab">
            <div className="Score">
              <h1>Score</h1>
              <span>{Score}</span> 
            </div>
            <div className="HighScore">
              <h1>High Score</h1>
              <span>{Highscore}</span>
            </div>
          </div>
        </div>
    );
}

export default InfoBar;