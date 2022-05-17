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
import HighScorePop from './HighScorePop';
import "./GamePage.css";
import { Howl } from 'howler';
import {cartoonJumpRef, blasterMaster} from './Firebase';
import {getDownloadURL} from "firebase/storage";
import {GameFailSoundRef} from './Firebase';


function GamePage() {
  const [state, dispatch] = useStateValue();
  const FirstSceneRef = useRef();
  const SecondSceneRef = useRef();
  const ThirdSceneRef = useRef();
  const CloudRef= useRef();
  const BouncyRef = useRef();
  const TrailsRef = useRef();
  const [X, setX] = useState(false);
  const speed = useRef(1);
  const [P, setP] = useState();
  const BlasterMasterRef = useRef();
 
  useEffect(() => {
    let t = 3000;
    getDownloadURL(blasterMaster)
    .then((url) =>{
        BlasterMasterRef.current = new Howl({
            src: [url],
            loop: true,
            autoplay: true,
            volume: 0.6
        })
        setP(true);
    })
    .catch((err) => {
    console.log(err);
    });
    
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
      FirstSceneRef.current.updatePlaybackRate(speed.current);
      SecondSceneRef.current.updatePlaybackRate(speed.current);
      ThirdSceneRef.current.updatePlaybackRate(speed.current);
     }, 50*1000);
    } else if(state.GameStates.Start === false){
      speed.current=1;
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
      CloudRef.current.cancel();
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
      CloudRef.current.play();
      BouncyRef.current.cancel();
    }
    if(state.GameStates.Start === false) {
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
      CloudRef.current.cancel();
      FirstSceneRef.current.pause();
      SecondSceneRef.current.pause();
      ThirdSceneRef.current.pause();
      CloudRef.current.pause();
    }
  }, [state.GameStates.Start]);

  useEffect(() => { 
    if(state.GameStates.Pause === true || state.GameStates.GameOver === true) {
      FirstSceneRef.current.pause();
      SecondSceneRef.current.pause();
      ThirdSceneRef.current.pause();
      BouncyRef.current.pause()
    }else if(state.GameStates.Resume === true) {
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
    }else if(state.GameStates.Quit === true ) {
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
    }else if(state.GameStates.Restart === true) {
      speed.current = 1;
      FirstSceneRef.current.cancel();
      SecondSceneRef.current.cancel();
      ThirdSceneRef.current.cancel();
      BouncyRef.current.cancel();
      
      FirstSceneRef.current.play();
      SecondSceneRef.current.play();
      ThirdSceneRef.current.play();
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
      GameFailSoundRef.play();
      BlasterMasterRef.current.pause();
    }else{
      if(P === true && state.Audio === true){
        BlasterMasterRef.current.play()
      }
    }
  }, [state.GameStates.GameOver, P]);

  function HandleJump(e){
    e.stopPropagation();
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
  useEffect(() => {
    if(P === true){
      if(state.Audio === false ){
        BlasterMasterRef.current.pause()
      }
      if(state.Audio === true){
        BlasterMasterRef.current.play()
      }
    }
  }, [state.Audio, P]);

  useLayoutEffect(() =>{
      window.addEventListener("keydown", HandleJump);
      return(() =>{
        window.removeEventListener("keydown", HandleJump)
      })
  });
 
  return (
    <div className='Sensitive'>
      <div className='SensitiveTab' onTouchStart={HandleJump}></div>
      <div className="BackGC">
        <div className="GamePage">
          <HighScorePop/>
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