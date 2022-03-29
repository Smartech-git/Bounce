import React, {useEffect, useState} from 'react';
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
import "./GamePage.css";


function GamePage() {
  const [state, dispatch] = useStateValue();
  const [InnerD, setInnerD] = useState();
  
  useEffect(() => {
    if(state.GameStates.Start === false) {
      setInnerD(<Home/> );
    } else if(state.GameStates.Pause === true) {
       setInnerD(<PausePage/>);
    }else {
      setInnerD();
    };
  }, [state])

  return (
    <div className="BackGC">
      {InnerD}
      <div className="GamePage">
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
  );
}

export default GamePage;