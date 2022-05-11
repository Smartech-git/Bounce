import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import Birds from "./Characters/Images/Birds.gif"
import InfoBar from './InfoBar';
import Bundle from './Bundle';
import Home from './Home';
import PausePage from './PausePage';
import GameOver  from './GameOver';
import BackGround11 from './Characters/scenes/BackGround11';
import BackGround12 from './Characters/scenes/BackGround12';
import BackGround13 from './Characters/scenes/BackGround13';
import BackGround14 from './Characters/scenes/BackGround14';
import BackGround21 from './Characters/scenes/BackGround21';
import BackGround22 from './Characters/scenes/BackGround22';
import BackGround23 from './Characters/scenes/BackGround23';
import BackGround24 from './Characters/scenes/BackGround24';
import BackGround31 from './Characters/scenes/BackGround31';
import BackGround32 from './Characters/scenes/BackGround32';
import BackGround33 from './Characters/scenes/BackGround33';
import BackGround34 from './Characters/scenes/BackGround34';
import Cloud from './Characters/Cloud';
import { useStateValue } from './StateProvider';
import "./GamePage.css";
import HighScorex from './Characters/Images/HighScorex.png';
import {cartoonJumpRef} from './Firebase';


function GamePage() {
  const [state, dispatch] = useStateValue();
  const [Pop, setPop] = useState();
  const FirstSceneRef = useRef();
  const SecondSceneRef = useRef();
  const ThirdSceneRef = useRef();
  const PlatformRef = useRef();
  const CloudRef= useRef();
  const BouncyRef = useRef();
  const TrailsRef = useRef();
  const [X, setX] = useState(false);
  const speed = useRef(1);
  
 
  useEffect(() => {
   let t = 3000;
   let C = document.getElementsByClassName("Clouds")[0].animate(
    [
      {transform: "translateX(0)"},
      {transform: "translateX(-75%)"}
    ],
    { 
      delay: t,
      duration: 300*1000,
      easing: 'linear',
      iteration: Infinity
    }
  )
  let F = document.getElementsByClassName("FirstScene")[0].animate(
    [
      {transform: 'translateX(0)'},
      {transform: 'translateX(-80%)'}
    ],
    {
      delay: t,
      duration: 50000,
      easing: 'linear',
      iterations: Infinity
    }
  );

  let S  = document.getElementsByClassName("SecondScene")[0].animate(
    [
      {transform: 'translateX(0)'},
      {transform: 'translateX(-80%)'}
    ],
    {
      delay: t,
      duration: 75000,
      easing: 'linear',
      iterations: Infinity
    }
  );

  let T = document.getElementsByClassName("ThirdScene")[0].animate(
    [
      {transform: 'translateX(0)'},
      {transform: 'translateX(-80%)'}
    ],
    {
      delay: t,
      duration: 112500,
      easing: 'linear',
      iterations: Infinity
    }
  );

  let P = document.getElementsByClassName("PlayBuilding")[0].animate(
    [
      {transform: "translateX(0%)"},
      {transform: "translateX(-75%)"}
    ],
    {
      delay: t,
      duration: 9000,
      easing: 'linear',
      iterations: Infinity
    }
  );
    
  let Bouncy = document.getElementsByClassName("Bouncy")[0].animate(
    [
      {bottom: "70px"},
      {bottom: "40vh", offset: 0.38},
      {bottom: "40vh", offset: 0.5},
      {bottom: "70px"}
    ],
    {
      duration: 700,
      easing: "linear",
    }
  );
    
  let Trails = document.getElementsByClassName("trails")[0].animate(
    [
      {transform: "rotate(-30deg) scaleX(0.6)"},
      {transform: "rotate(0deg) scaleX(1)", offset: 0.5},
      {transform: "rotate(30deg) scaleX(0.6)"}
    ],
    {
      duration: 600
    }

  );

  FirstSceneRef.current = F;
  SecondSceneRef.current = S;
  ThirdSceneRef.current = T;
  PlatformRef.current = P;
  CloudRef.current = C;
  BouncyRef.current = Bouncy;
  TrailsRef.current = Trails;
 },[]);
 
  useEffect(() =>{
   let ID;
   if(state.GameStates.Start === true && state.GameStates.Pause === false){
    speed.current=1;
    ID = setInterval(() =>{
      speed.current = speed.current + 0.3;
      PlatformRef.current.updatePlaybackRate(speed.current);
      // PlatformRef.current.ready.then(() =>{
      //   console.log(PlatformRef.current.playbackRate);
      // });
      FirstSceneRef.current.updatePlaybackRate(speed.current);
      SecondSceneRef.current.updatePlaybackRate(speed.current);
      ThirdSceneRef.current.updatePlaybackRate(speed.current);
     }, 30*1000);
    } else if(state.GameStates.Start === false){
      speed.current=1;
      PlatformRef.current.updatePlaybackRate(1);
      FirstSceneRef.current.updatePlaybackRate(1);
      SecondSceneRef.current.updatePlaybackRate(1);
      ThirdSceneRef.current.updatePlaybackRate(1);
     }
    return(() =>{
      clearInterval(ID)
    })
 }, [state.GameStates.Start, state.GameStates.Pause]);


  useEffect(() => {
    if (state.GameStates.Start === true) {
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
      PlatformRef.current.cancel();
      CloudRef.current.cancel();
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
      PlatformRef.current.play();
      CloudRef.current.play();
      BouncyRef.current.cancel();
    }
    if(state.GameStates.Start === false) {
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
      PlatformRef.current.cancel();
      CloudRef.current.cancel();
      FirstSceneRef.current.pause();
      SecondSceneRef.current.pause();
      ThirdSceneRef.current.pause();
      PlatformRef.current.pause();
      CloudRef.current.pause();
    }
  }, [state.GameStates.Start]);

  useEffect(() => {
    if(state.GameStates.Pause === true || state.GameStates.GameOver === true) {
      FirstSceneRef.current.pause();
      SecondSceneRef.current.pause();
      ThirdSceneRef.current.pause();
      PlatformRef.current.pause();
      BouncyRef.current.pause()
    }else if(state.GameStates.Resume === true) {
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
      PlatformRef.current.play();
    }else if(state.GameStates.Quit === true ) {
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
      PlatformRef.current.cancel();
    }else if(state.GameStates.Restart === true) {
      speed.current = 1;
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
      PlatformRef.current.cancel();
      BouncyRef.current.cancel();
      
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
      PlatformRef.current.play();
    }
  }, [state.GameStates.Pause, state.GameStates.Resume, state.GameStates.Quit, state.GameStates.Restart, state.GameStates.GameOver]);

  useEffect(() => {
    let ID;
    setX(false);
    if(state.GameStates.Start === true || state.GameStates.Restart === true){
      ID = setTimeout(() => {
        setX(true);
      }, 3000);
    }
    return(() => {
      clearTimeout(ID)
    })
  }, [state.GameStates.Start, state.GameStates.Restart]);

  useLayoutEffect(() =>{
    if(state.GameStates.GameOver === true){
      setX(false);
    }
  }, [state.GameStates.GameOver]);

  function HandleJump(){
    if(state.GameStates.Start === true && X === true){
      BouncyRef.current.play();
      TrailsRef.current.play();
      cartoonJumpRef.play();
    }
    if(state.GameStates.Pause === true){
      BouncyRef.current.pause();
      TrailsRef.current.pause();
    }   
  }

  useEffect(() =>{
      window.addEventListener("keydown", HandleJump);
  
      return(() =>{
        window.removeEventListener("keydown", HandleJump)
      })
  })

  useEffect(() =>{
    setPop(false);
    if(state.HighScore === true){
      setPop(true);
    }
  }, [state.HighScore]);
 
  return (
    <div className='Sensitive'>
      <div className='SensitiveTab' onMouseDown={HandleJump}></div>
      <div className="BackGC">
        <div className="GamePage">
          <div className={`HighscorePop Pop${Pop}`}>
            <img src={HighScorex} alt="High Score"></img>
          </div>
          {state.GameStates.Start === false && <Home/>}
          {state.GameStates.Pause === true && <PausePage/>}
          {state.GameStates.GameOver === true && <GameOver/>}
          <div className='Content'>
            <InfoBar/>
            <div className="Sun" style={{position: "absolute", top: "15vh", left: "14vw"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#BDCA93"/>
              </svg>
            </div>
            <div className="Clouds">
              <Cloud/>
              <Cloud/>
              <Cloud/>
              <Cloud/>
            </div>
            <div className="Birds">
              <img src={Birds} alt="Birds"></img>
            </div>
            <Bundle/>
            <div className="FirstScene">
              <BackGround11/>
              <BackGround12/>
              <BackGround13/>
              <BackGround14/>
              <BackGround11/>
            </div>
            <div className="SecondScene">
              <BackGround21/>
              <BackGround22/>
              <BackGround23/>
              <BackGround24/>
              <BackGround21/>
            </div>
            <div className="ThirdScene">
              <BackGround31/>
              <BackGround32/>
              <BackGround33/>
              <BackGround34/>
              <BackGround31/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;