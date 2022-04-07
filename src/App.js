import React, {useEffect, useRef} from 'react';
import './App.css';
import Intro from './Intro';
import GamePage from './GamePage';
import {Route, Routes} from 'react-router-dom';
import {useStateValue} from './StateProvider';


function App() {
  const [state, dispatch] = useStateValue();
  const BouncyRef = useRef();
  useEffect(() => {
    let Bouncy = document.getElementsByClassName("Bouncy")[0].animate(
      [
        {transform: "translateY(0px)"},
        {transform: "translateY(-60px)", offset: 0.5},
        {transform: "translateY(-60px)", offset: 0.61},
        {transform: "translateY(0px)"}
      ],
      {
        duration: 900,
        easing: "linear",
      }
    )
    let Trails = document.getElementsByClassName("trails")[0].animate(
      [

      ]

    )
    BouncyRef.current = Bouncy
  }, []);
  
  useEffect(() => {
    console.log(BouncyRef.current.offsetTop);
  }, [BouncyRef.current.offsetTop]);

  function HandleJump(){
    if(state.GameStates.Start === true){
      BouncyRef.current.play();
    } else if(state.GameStates.Pause === true){
      BouncyRef.current.pause();
    } 
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
