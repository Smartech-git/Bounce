import React, {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Intro from './Intro';
import Loading from './Loading';
const GamePage = lazy(() => import('./GamePage'));

function App() {
  return (
    <div className="App">
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
