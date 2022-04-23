import { useEffect, useState } from 'react';
import './Home.css';
import Bounce from './Characters/Images/Bounce.png';
import BouncyDP from './Characters/BouncyDP';
import Score from './Characters/Images/Score.png';
import HighScore from './Characters/Images/HighScore.png';
import HowToPlay from './Characters/Images/HowToPlay.png';
import Mobile from './Characters/Images/Mobile.png';
import Desktop from './Characters/Images/Desktop.png';
import {useStateValue} from './StateProvider';
import { actionTypes } from './Reducer';

function Home() {
    const [state, dispatch] = useStateValue();
    const [letsGo, setLetsGo] = useState();
    const [unmount, setUnmount]  = useState();

    useEffect(() => {
        let ID;
        if(letsGo === false) {
            ID = setTimeout(()=>  {
                const action2 = {
                    type: actionTypes.GAMEOVER,
                    GameOver: false
                }
                
                dispatch(action2);
                const action = {
                    type : actionTypes.START,
                    Start: true
                }
                dispatch(action);

                const action3 = {
                    type : actionTypes.QUIT,
                    Start : false
                }
                dispatch(action3);
            }, 500);
        } 
        return(() => { 
            clearTimeout(ID);
            setUnmount("Unmount");
        })
    }, [letsGo]);


    return (
        <div className={`Home ${unmount}`}>
            <div className="InnerTab">
                <div className="HomeInfo">
                    <div className="Bounce">
                        <img src={Bounce} alt="Bounce" decoding='sync'></img>
                    </div>
                    <div className="BounceProfile">
                        <BouncyDP/>
                        <div className="ScorePoints">
                            <div className="ScoreHome">
                                <img src={Score} alt="Score"></img>
                                <span>{JSON.parse(localStorage.getItem("ScorePoints")).score}</span>
                            </div>
                            <div className="HighScoreHome">
                                <img src={HighScore} alt="HighScore"></img>
                                <span>{JSON.parse(localStorage.getItem("ScorePoints")).highScore}</span>
                            </div>
                        </div>
                    </div>
                    <div className="HomeSecondTab">
                        <div className="HowToPlay">
                            <img src={HowToPlay} alt="How to play"></img>
                        </div>
                        <div className="Details">
                            <div className="FirstDetail">
                                <img src={Mobile} alt="Mobile"></img>
                                <span>Tap the screen to jump.</span>
                            </div>
                            <div className="SecondDetail">
                                <img src={Desktop} alt="Desktop"></img>
                                <span>Press any key to jump. If touch screen compatible, you can tap the screen.</span>
                            </div>
                        </div>
                    </div>
                    <div className={`ActionBotton letsGo${letsGo}`} onMouseDown={() => setLetsGo(true)} onMouseUp={() => setLetsGo(false)}>
                        <span>Let's bounce</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;