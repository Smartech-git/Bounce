import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import PauseButton from './PauseButton';
import Score from './Characters/Images/ScoreS.png';
import ScoreXS from './Characters/Images/ScoreXS.png';
import HighScore from './Characters/Images/HighScoreS.png'
import HighScoreXS from './Characters/Images/HighScoreXS.png';
import {useStateValue} from './StateProvider';
import "./InfoBar.css";
import { actionTypes } from './Reducer';

function InfoBar() {
  const [state, dispatch] = useStateValue();
  const [score, setScore] = useState("000000");
  const [X, setX] = useState(false);
  const arr = useRef(['0', '0', '0', '0', '0', '0'])
  const point = useRef(0);
  const T = useRef(3000);


  useLayoutEffect(() => {
    if(state.GameStates.Start === true || state.GameStates.Restart === true){
      setScore("000000");
      arr.current = ['0', '0', '0', '0', '0', '0'];
      point.current = 0;
      T.current = 3000;
      setX(false);
    }
  }, [state.GameStates.Start, state.GameStates.Restart]);


  useEffect(() => {
    // localStorage.clear()
    let ID2;
    let ID
    if((state.GameStates.Start === true && state.GameStates.GameOver === false && X === false)){
      ID2 = setTimeout(() =>{
        ID = setInterval(() => {
          point.current++;
          if(point.current < 10){
            arr.current.splice(5, 1, point.current.toString());
            setScore(arr.current.join(''));
          } else if(10 <= point.current && point.current < 100) {
            arr.current.splice(4, 2, point.current.toString());
            setScore(arr.current.join(''));
          } else if( 100 <= point.current && point.current < 1000){
            arr.current.splice(3, 3, point.current.toString());
            setScore(arr.current.join(''));
          } else if(1000 <= point.current && point.current < 10000){
            arr.current.splice(2, 4, point.current.toString());
            setScore(arr.current.join(''));
          } else if(10000 <= point.current && point.current < 100000){
            arr.current.splice(1, 5, point.current.toString());
            setScore(arr.current.join(''));
          } else{
            setScore(point.current.toString());
          }
          if(JSON.parse(localStorage.getItem("ScorePoints")).highScore >= 1){
            if(point.current > JSON.parse(localStorage.getItem("ScorePoints")).highScore){
              if(state.HighScore === false){
                const action = {
                  type: actionTypes.HIGHSCORE,
                  HighScore: true
                }
                dispatch(action);
              }
            }
          }
        }, 100); 
      }, T.current);    
    }
    return(() => {
      clearInterval(ID)
      clearTimeout(ID2);
    }) 
  }, [state.GameStates.Start, state.GameStates.Resume, state.GameStates.GameOver, X, state.HighScore]);


  useLayoutEffect(() => {
    if(state.GameStates.Quit === true){
      T.current = 3000;
      setScore("000000");
      arr.current = ['0', '0', '0', '0', '0', '0'];
      point.current = 0;
      setX(true);
    }else if(state.GameStates.GameOver === true){
      setX(false)
      let ScorePointUpdate = JSON.parse(localStorage.getItem("ScorePoints"));
      ScorePointUpdate.score = point.current.toString();

      if(point.current >= parseInt(ScorePointUpdate.highScore)){
        ScorePointUpdate.highScore = point.current.toString();
      }
      localStorage.setItem("ScorePoints", JSON.stringify(ScorePointUpdate));
      // console.log(JSON.parse(localStorage.getItem("ScorePoints")).highscore); 
    } else if(state.GameStates.Resume === true){
      T.current = 0;
      setX(false);
    } else if(state.GameStates.Pause === true){
      setX(true);
    }
  }, [state.GameStates.Quit, state.GameStates.GameOver, state.GameStates.Resume, state.GameStates.Pause]);
  

  return (
      <div className="InfoBar">
        <div className='InContent'>
          <PauseButton/>
          <div className="ScoreTab">
            <div className="Score">
              <img className='NavScore_ImgL' src={Score} alt="Score"></img>
              <img className='NavScore_ImgXS' src={ScoreXS} alt="Score"></img>
              <span>{score}</span> 
            </div>
            <div className="HighScore">
              <img className="NavHighScore_ImgL" src={HighScore} alt="HighScore"></img>
              <img className="NavHighScore_ImgXS" src={HighScoreXS} alt="HighScore"></img>
              <span>{JSON.parse(localStorage.getItem("ScorePoints")).highScore}</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default InfoBar;