import React, {useState, useEffect, useRef} from 'react';
import PauseButton from './PauseButton';
import Score from './Characters/Images/Score.png';
import HighScore from './Characters/Images/HighScore.png'
import {useStateValue} from './StateProvider';
import "./InfoBar.css";

function InfoBar() {
  const [state] = useStateValue();
  const [score, setScore] = useState("000000");
  const point = useRef(0);

  useEffect(() => {
    let arr = score.split('');
    let ID;
    if(state.GameStates.Start === true && state.GameStates.Pause === false){
      ID = setInterval(() => {
        point.current++;
        if(point.current < 10){
          arr.splice(5, 1, point.current.toString());
          setScore(arr.join(''));
        } else if(10 <= point.current && point.current < 100) {
          arr.splice(4, 2, point.current.toString());
          setScore(arr.join(''));
        } else if( 100 <= point.current && point.current < 1000){
          arr.splice(3, 3, point.current.toString());
          setScore(arr.join(''));
        } else if(1000 <= point.current && point.current < 10000){
          arr.splice(2, 4, point.current.toString());
          setScore(arr.join(''));
        } else if(10000 <= point.current && point.current < 100000){
          arr.splice(1, 5, point.current.toString());
          setScore(arr.join(''));
        } else{
          setScore(point.current.toString());
        }
      }, 50)
    }else if(state.GameStates.Quit === true){
      setScore("000000");
      point.current = 0;
    }
    return(() => {
      clearInterval(ID)
    }) 
  }, [state.GameStates.Start, state.GameStates.Pause, state.GameStates.Quit])

  return (
      <div className="InfoBar">
        <div className='InContent'>
          <PauseButton/>
          <div className="ScoreTab">
            <div className="Score">
              <img src={Score} alt="Score"></img>
              <span>{score}</span> 
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