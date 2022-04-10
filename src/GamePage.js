import React, {useEffect, useState, useRef} from 'react';
import Birds from "./Characters/Images/Birds.gif"
import InfoBar from './InfoBar';
import BuildingTop from './Characters/BuildingTop';
import Home from './Home';
import PausePage from './PausePage';
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
import Bouncy from './Bouncy';
import "./GamePage.css";


function GamePage() {
  const [state, dispatch] = useStateValue();
  const FirstSceneRef = useRef();
  const SecondSceneRef = useRef();
  const ThirdSceneRef = useRef();
  const PlatformRef = useRef();
  const CloudRef= useRef();

 
 useEffect(() => {
   let t = 3000;
   let C = document.getElementsByClassName("Clouds")[0].animate(
    [
      {transform: "translateX(0)"},
      {transform: "translateX(-75%)"}
    ],
    { 
      delay: t,
      duration: 800*1000,
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
      duration: 100000,
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
      duration: 200000,
      easing: 'linear',
      iterations: Infinity
    }
  );

  let P = document.getElementsByClassName("BuildingTops")[0].animate(
    [
      {transform: "translateX(0)"},
      {transform: "translateX(-50%)"}
    ],
    {
      delay: t,
      duration: 20000,
      easing: 'linear',
      iterations: Infinity
    }
  );

  let B = document.getElementsByClassName("Birds")[0].animate(
    [
      {transform: "translate(100vw)"},
      {transform: "translate(-10vw)"}
    ],
    {
      delay: 5*1000,
      duration: 10*1000
    }
  )

  FirstSceneRef.current = F;
  SecondSceneRef.current = S;
  ThirdSceneRef.current = T;
  PlatformRef.current = P;
  CloudRef.current = C;
 },[]);
 

  useEffect(() => {
    if (state.GameStates.Start === true) {
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
      PlatformRef.current.play();
      CloudRef.current.play();
    } else if(state.GameStates.Start === false) {
      FirstSceneRef.current.pause();
      SecondSceneRef.current.pause();
      ThirdSceneRef.current.pause();
      PlatformRef.current.pause();
      CloudRef.current.pause();
    }
  }, [state.GameStates.Start]);

  useEffect(() => {
    if(state.GameStates.Pause === true) {
      FirstSceneRef.current.pause();
      SecondSceneRef.current.pause();
      ThirdSceneRef.current.pause();
      PlatformRef.current.pause();
      CloudRef.current.pause();
    }else if(state.GameStates.Resume === true) {
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
      PlatformRef.current.play();
      CloudRef.current.play();
    }else if(state.GameStates.Quit === true ) {
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
      PlatformRef.current.cancel();
      CloudRef.current.cancel();
    }else if(state.GameStates.Restart === true) {
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
    }
  }, [state.GameStates.Pause, state.GameStates.Resume, state.GameStates.Quit, state.GameStates.Restart])

console.log("Rendering")
  return (
    <div className="BackGC">
      <div className="GamePage">
        {state.GameStates.Start === false && <Home/>}
        {state.GameStates.Pause === true && <PausePage/>}
        <div className='Content'>
          <InfoBar/>
          <div className="Sun" style={{position: "absolute", top: 60, left: 200}}>
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
          <Bouncy/>
          <div className="BuildingTops">
            <BuildingTop/>
            <BuildingTop/> 
            <BuildingTop/> 
            <BuildingTop/>
          </div>
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
  );
}

export default GamePage;