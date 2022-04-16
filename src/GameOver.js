import React,{useState, useEffect} from 'react';
import './GameOver.css';

function GameOver() {
    const [unmount, setUnmount] = useState();

    return (
        <div className={`GameOver ${unmount}`}>
           <div className ="GameOverTab">
            </div> 
        </div>
    );
}

export default GameOver;