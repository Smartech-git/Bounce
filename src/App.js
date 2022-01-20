
import './App.css';
import Intro from './Intro';
import LoadPage from './LoadPage';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Intro/>}/>
        <Route path ="/loading..." element={<LoadPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
