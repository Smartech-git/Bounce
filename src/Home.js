import { useEffect, useState } from 'react';
import './Home.css';
import Bounce from './Characters/Images/Bounce.png';
import Emoji from './Characters/Images/Emoji.png';
import Score from './Characters/Images/Score.png';
import HighScore from './Characters/Images/HighScore.png';
import HowToPlay from './Characters/Images/HowToPlay.png';
import Mobile from './Characters/Images/Mobile.png';
import Desktop from './Characters/Images/Desktop.png';

function Home() {
    const [letsGo, setLetsGo] = useState();

    useEffect(() => {
        let ID;
        if(letsGo === false) {
            ID = setTimeout(()=> {
                
            }, 500);
        }
        return(() => { 
            clearTimeout(ID);
        })
    }, [letsGo]);


    return (
        <div className='Home'>
            <div className="HomeFirstTab">
                <div className="HomeInfo">
                    <div className="Bounce">
                        <img src={Bounce} alt="Bounce"></img>
                    </div>
                    <div className="BounceProfile">
                        <div className="BounceEmoji">
                            <img src={Emoji} alt="BouceEmoji"></img>
                        </div>
                        <div className="ScorePoints">
                            <div className="ScoreHome">
                                <img src={Score} alt="Score"></img>
                                <span>0000</span>
                            </div>
                            <div className="HighScoreHome">
                                <img src={HighScore} alt="HighScore"></img>
                                <span>0000000</span>
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
                    <div className={`ActionBotton ${letsGo}`} onMouseDown={() => setLetsGo(true)} onMouseUp={() => setLetsGo(false)}>
                        <span>Let's bounce</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;