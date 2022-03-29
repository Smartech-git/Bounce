
import './App.css';
import Intro from './Intro';
import GamePage from './GamePage';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Intro/>}/>
        <Route path ="gamemode" element={<GamePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
