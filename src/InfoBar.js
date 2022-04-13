import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import PauseButton from './PauseButton';
import Score from './Characters/Images/Score.png';
import HighScore from './Characters/Images/HighScore.png'
import {useStateValue} from './StateProvider';
import "./InfoBar.css";

function InfoBar() {
  const [state] = useStateValue();
  const [score, setScore] = useState("000000");
  const point = useRef(0);
  const T = useRef(3000);

  useEffect(() => {
    let arr = score.split('');
    let ID;
    let ID2;
    if(state.GameStates.Start === true && state.GameStates.Pause === false){
      ID2 = setTimeout(() =>{
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
        }, 100); 
      }, T.current);  
    } 
    
    return(() => {
      clearInterval(ID)
      clearTimeout(ID2);
    }) 
  }, [state.GameStates.Start, state.GameStates.Pause, state.GameStates.Resume]);

  useEffect(() => {
    if(state.GameStates.Quit === true || state.GameStates.Restart === true){
      T.current = 3000;
      setScore("000000");
      point.current = 0;
    }
  }, [state.GameStates.Quit, state.GameStates.Restart]);

  useLayoutEffect(() => {
    if(state.GameStates.Resume === true){
      T.current = 0;
    }
  }, [state.GameStates.Resume]);

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