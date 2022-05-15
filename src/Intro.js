import {useState, useEffect, useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import Emoji from "./Characters/Emoji";
import Bounce from "./Characters/Images/Bounce.png";
import BounceS from "./Characters/Images/BounceS.png";
import {clickSoundRef} from './Firebase';
import './Intro.css';

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
        // let orientation = window.screen.orientation.type;
        // let AppRef = document.getElementsByClassName("App")[0];
        // console.log(orientation)
        // if(window.screen.width < 800){
        //     if(orientation === "portrait-secondary" || orientation === "portrait-primary"){
        //         AppRef.requestFullscreen({navigtionUI:"hide"})
        //         .then(() =>{
        //             window.screen.orientation.lock("landscape-primary")
        //         })
        //     }
        // }
        // if((window.screen.height < 700 && orientation === "landscape-primary") || (window.screen.height < 700 && orientation === "landscape-secondary")){
        //     AppRef.requestFullscreen({navigtionUI:"hide"});
        // }

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
        let ID2;
        if(load === "start") {
            ID = setTimeout(() => {
                navigate("/gamemode");
           }, 7000);
        }

        return(() =>{
            clearTimeout(ID);
            clearTimeout(ID2)
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
                        A simple game built on React.js library. Design and illustrations - Figma.
                    </p>
                </div>
                {toggle === "loading" ? (
                     <div className = "loading">
                         <div className = "loadStatus"></div>
                     </div>
                ) : (
                    <div className = {`Botton ${toggle}`} onMouseDown={() => setToggle(true)} onMouseUp={() => setToggle(false)}>
                        <p>Play</p>
                    </div>
                )}    
            </div>
        </div>
    )
}
