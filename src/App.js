import React, {Suspense, lazy, useEffect, useRef} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Intro from './Intro';
import Loading from './Loading';
const GamePage = lazy(() => import('./GamePage'));

function App() {
  const AppRef = useRef(null);
  
  useEffect(() =>{
    let orientation = window.screen.orientation.type;
    console.log(orientation);

    if(window.screen.width < 800){
      if(orientation === "portrait-secondary" || orientation === "portrait-primary"){
        window.screen.orientation.lock("landscape-primary")
        .then(() =>{
          console.log("success")
        })
        .catch((err) =>{
          console.log(err)
        })
      }
    } else if(window.screen.height < 800 && (orientation === "landscape-primary" || orientation === "landscape-secondary")){

    }
  })

  return (
    <div className="App" ref={AppRef}>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path ="/" element={<Intro/>}/>
          <Route path ="gamemode" element={<GamePage/>}/>
        </Routes>
      </Suspense> 
    </div>
  );
}

export default App;
