import React, {useState, useEffect} from 'react';
import GameoverText from './Characters/Images/GameoverText.png';
import './GameOver.css';
import {useStateValue} from './StateProvider';
import { actionTypes } from './Reducer';
import {clickSoundRef} from './Firebase';

function GameOver() {
    const [cont, setCont] = useState();
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        let ID;
        if(cont === false) {
            ID = setTimeout(() => {
                const action = {
                    type: actionTypes.GAMEOVER,
                    GameOver: false
                }
                dispatch(action);
                const action2 = {
                    type : actionTypes.START,
                    Start : false
                };
                dispatch(action2);
                
                const action3 = {
                    type: actionTypes.RESTART,
                    Restart: false,
                };
                dispatch(action3);
                const action4 = {
                    type: actionTypes.PAUSE,
                    Pause: false,
                };
                dispatch(action4);
                const action5 ={
                    type: actionTypes.HIGHSCORE,
                    HighScore: false,
                }
                dispatch(action5)
            }, 500);
        }

        return(() => {
            clearTimeout(ID);
        })
    }, [cont])

    function onclick() {
        setCont(true)
        clickSoundRef.play()
    }

    return (
        <div className="GameOverC">
           <img src={GameoverText} alt="Game Over"></img>
           <div className={`Continue cont${cont}`} onMouseDown={onclick} onMouseUp={() => setCont(false)}>
                <span>Continue</span>
           </div>
        </div>
    );
}

export default GameOver;