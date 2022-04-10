import React, {useEffect, useRef, useLayoutEffect} from 'react';
import './App.css';
import Intro from './Intro';
import GamePage from './GamePage';
import {Route, Routes} from 'react-router-dom';
import {useStateValue} from './StateProvider';


function App() {
  const [state, dispatch] = useStateValue();
  const BouncyRef = useRef();
  const TrailsRef = useRef();
  const x = useRef(false);
  useEffect(() => {
    if(window.location.pathname === "/gamemode"){
      let Bouncy = document.getElementsByClassName("Bouncy")[0].animate(
        [
          {top: "60.6vh"},
          {top: "42vh", offset: 0.5},
          {top: "42vh", offset: 0.5},
          {top: "60.6vh"}
        ],
        {
          duration: 600,
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
      BouncyRef.current = Bouncy;
      TrailsRef.current = Trails;
    }
  }, []);

  useEffect(() => {
    x.current = false;
    if(state.GameStates.Start === true || state.GameStates.Restart){
      setTimeout(() => {
        x.current = true
      }, 3000);
    }  
  }, [state.GameStates.Start, state.GameStates.Restart]);

  function HandleJump(){
    if(state.GameStates.Start === true && x.current === true){
      BouncyRef.current.play();
      TrailsRef.current.play();
    } else if(state.GameStates.Pause === true){
      BouncyRef.current.pause();
      TrailsRef.current.pause();
    } 
  }

  window.onKeypress = function(){
    HandleJump();
  }

  return (
    <div className="App">
      <div className='SensitiveTab' onMouseDown={HandleJump}></div>
      <Routes>
        <Route path ="/" element={<Intro/>}/>
        <Route path ="gamemode" element={<GamePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
