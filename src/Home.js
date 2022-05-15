import { useEffect, useState} from 'react';
import './Home.css';
import Bounce from './Characters/Images/Bounce.png';
import BouncyDP from './Characters/BouncyDP';
import Score from './Characters/Images/Score.png';
import ScoreS from './Characters/Images/ScoreS.png';
import HighScore from './Characters/Images/HighScore.png';
import HighScoreS from './Characters/Images/HighScoreS.png';
import HowToPlayS from './Characters/Images/HowToPlayS.png';
import HowToPlay from './Characters/Images/HowToPlay.png';
import Mobile from './Characters/Images/Mobile.png';
import Desktop from './Characters/Images/Desktop.png';
import {useStateValue} from './StateProvider';
import AudioBotton from './AudioBotton';
import { actionTypes } from './Reducer';
import { clickSoundRef } from './Firebase';

function Home() {
    const [state, dispatch] = useStateValue();
    const [letsGo, setLetsGo] = useState();
    const [unmount, setUnmount]  = useState();

    useEffect(() => {
        let ID;
        if(letsGo === false) {
            clickSoundRef.play();
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
            <div className="InnerTab_Home">
                <div className="HomeInfo">
                    <div className="Bounce">
                        <img src={Bounce} alt="Bounce" decoding='sync'></img>
                    </div>
                    <div className="BounceProfile">
                        <BouncyDP/>
                        <div className="ScorePoints">
                            <div className="ScoreHome">
                                <img className='Score_ImgLarge' src={Score} alt="Score"></img>
                                <img className='Score_ImgSmall' src={ScoreS} alt="Score"></img>
                                <span>{JSON.parse(localStorage.getItem("ScorePoints")).score}</span>
                            </div>
                            <div className="HighScoreHome">
                                <img className="HighScore_ImgLarge" src={HighScore} alt="HighScore"></img>
                                <img className="HighScore_ImgSmall" src={HighScoreS} alt="HighScore"></img>
                                <span>{JSON.parse(localStorage.getItem("ScorePoints")).highScore}</span>
                            </div>
                        </div>
                    </div>
                    <div className="HomeSecondTab">
                        <div className="HowToPlay">
                            <img className='HTP-S' src={HowToPlayS} alt="How to play"></img>
                            <img className='HTP-L' src={HowToPlay} alt="How to Play"></img>
                        </div>
                        <div className="Details">
                            <div className="FirstDetail">
                               <img src={Mobile} alt="Mobile"></img>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.5625 2.20312H17.4375C17.8506 2.20312 18.1875 2.53999 18.1875 2.95312V20.9531C18.1875 21.3663 17.8506 21.7031 17.4375 21.7031H6.5625C6.14937 21.7031 5.8125 21.3663 5.8125 20.9531V2.95312C5.8125 2.53999 6.14937 2.20312 6.5625 2.20312ZM10.3125 18.375C10.3125 19.3072 11.0678 20.0625 12 20.0625C12.9322 20.0625 13.6875 19.3072 13.6875 18.375C13.6875 17.4428 12.9322 16.6875 12 16.6875C11.0678 16.6875 10.3125 17.4428 10.3125 18.375Z" fill="#FF9900" stroke="#990303" stroke-width="1.5"/>
                                </svg>
                                <span>Tap the screen to jump.</span>
                            </div>
                            <div className="SecondDetail">
                                <img src={Desktop} alt="Desktop"></img>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M1.81925 20.1826L1.81741 20.1807C1.7736 20.1371 1.75 20.094 1.75 20C1.75 19.906 1.7736 19.8629 1.81741 19.8193L1.81925 19.8174C1.86291 19.7736 1.90597 19.75 2 19.75H22C22.094 19.75 22.1371 19.7736 22.1807 19.8174L22.1826 19.8193C22.2264 19.8629 22.25 19.906 22.25 20C22.25 20.094 22.2264 20.1371 22.1826 20.1807L22.1807 20.1826C22.1371 20.2264 22.094 20.25 22 20.25H2C1.90597 20.25 1.86291 20.2264 1.81925 20.1826ZM4 17.25C3.6503 17.25 3.37 17.1343 3.11833 16.8827C2.86572 16.6301 2.75 16.3493 2.75 16V5C2.75 4.65068 2.86572 4.36994 3.11833 4.11733C3.37 3.86566 3.6503 3.75 4 3.75H20C20.3496 3.75 20.6304 3.8656 20.8828 4.11743C21.1345 4.3698 21.25 4.65052 21.25 5V16C21.25 16.3495 21.1344 16.6303 20.8827 16.8827C20.6303 17.1344 20.3495 17.25 20 17.25H4Z" fill="#FF9900" stroke="#990303" stroke-width="1.5"/>
                                </svg>
                                <span>Press any key to jump. If touch screen compatible, you can tap the screen.</span>
                            </div>
                        </div>
                    </div>
                    <div className={`ActionBotton letsGo${letsGo}`} onMouseDown={() => setLetsGo(true)} onMouseUp={() => setLetsGo(false)}>
                        <span>Let's bounce</span>
                    </div>
                </div>
                <AudioBotton/>
            </div>
        </div>
    );
}

export default Home;