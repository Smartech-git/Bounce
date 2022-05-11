import {useState, useEffect, useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import Emoji from "./Characters/Emoji";
import Bounce from "./Characters/Images/Bounce.png";
import BounceS from "./Characters/Images/BounceS.png";
import {clickSoundRef} from './Firebase';
import './Intro.css';
import { prologAudioRef } from './Firebase';

export default function Intro () {
    const [toggle, setToggle] = useState();
    const [load, setLoad] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        let ScorePoints = {
            score: '0000',
            highScore: '0000'
        }
        if(localStorage.getItem("ScorePoints") === null){
            localStorage.setItem("ScorePoints", JSON.stringify(ScorePoints));
            console.log(localStorage.getItem("ScorePoints"))
        }
    }, [])

    useEffect(() => {
        let ID;
        if(toggle === false) {
            clickSoundRef.play();
            ID = setTimeout(()=> {
                setToggle("loading")
                setLoad("start");
            }, 500);
        }
        return(() => { 
            clearTimeout(ID);
        })   
    },[toggle]);

    useEffect(() => {
        let ID;
        if(load === "start") {
            ID = setTimeout(() => {
                navigate("/gamemode");
                prologAudioRef.volume(0.5);
                prologAudioRef.play();
           }, 7000);
        }

        return(() =>{
            clearTimeout(ID);
        })

    },[load]);
 
    return (
        
        <div className = "Intro">
            <div className = "IntroBody">
                <div className = "Bounce">
                    <div className = "BounceEmoji">
                        <Emoji/>
                    </div>
                    <div className = "BounceText">
                        <img className='Intro-BounceL' src={Bounce} alt="Bounce"/>
                        <img className='Intro-BounceS' src={BounceS} alt="Bounce"/>
                    </div>
                    <p className = "Info">
                        A simple game built on React.js library. GitHub repo: github.com/Smartech-git/Bounce.git.
                    </p>
                </div>
                {toggle === "loading" ? (
                     <div className = "loading">
                         <div className = "loadStatus"></div>
                     </div>
                ) : (
                    <div className = {`Botton ${toggle}`} onMouseDown={() => setToggle(true)} onMouseUp={() =>setToggle(false)}>
                        <p>Play</p>
                    </div>
                )}    
            </div>
        </div>
    )
}
