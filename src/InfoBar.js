import React, {useState, useEffect} from 'react';
import PauseButton from './PauseButton';
import Score from './Characters/Images/Score.png';
import HighScore from './Characters/Images/HighScore.png'
import {useStateValue} from './StateProvider';
import "./InfoBar.css";

function InfoBar() {
  const [state] = useStateValue();
  
    return (
        <div className="InfoBar">
          <div className='InContent'>
            <PauseButton/>
            <div className="ScoreTab">
              <div className="Score">
                <img src={Score} alt="Score"></img>
                <span>{state.Score}</span> 
              </div>
              <div className="HighScore">
                <img src={HighScore} alt="HighScore"></img>
                <span>{state.HighScore}</span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default InfoBar;