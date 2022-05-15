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
                    <div className="autoRotateInfo">
                        <p>For the best experience, turn on “auto-rotate” and keep the  orientation landscape.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" fill="none">
                            <path d="M5.24992 0.585938H1.74992C1.4405 0.585938 1.14375 0.708854 0.924961 0.927646C0.706168 1.14644 0.583252 1.44318 0.583252 1.7526V9.33594C0.583252 9.64536 0.706168 9.9421 0.924961 10.1609C1.14375 10.3797 1.4405 10.5026 1.74992 10.5026H5.24992C5.55934 10.5026 5.85608 10.3797 6.07488 10.1609C6.29367 9.9421 6.41659 9.64536 6.41659 9.33594V1.7526C6.41659 1.44318 6.29367 1.14644 6.07488 0.927646C5.85608 0.708854 5.55934 0.585938 5.24992 0.585938ZM5.24992 8.7526H1.74992V1.7526H5.24992V8.7526ZM12.2499 7.58594H7.58325V8.7526H12.2499V12.2526H5.24992V11.6693H3.49992V12.2526C3.49992 12.562 3.62283 12.8588 3.84163 13.0776C4.06042 13.2964 4.35717 13.4193 4.66659 13.4193H12.2499C12.5593 13.4193 12.8561 13.2964 13.0749 13.0776C13.2937 12.8588 13.4166 12.562 13.4166 12.2526V8.7526C13.4166 8.44318 13.2937 8.14644 13.0749 7.92765C12.8561 7.70885 12.5593 7.58594 12.2499 7.58594ZM13.4166 5.83594L11.0833 4.66927L12.1974 4.13844C11.8624 3.34584 11.3016 2.66933 10.5849 2.19322C9.86809 1.7171 9.02707 1.46243 8.16659 1.46094V0.585938C9.55897 0.585938 10.8943 1.13906 11.8789 2.12363C12.8635 3.10819 13.4166 4.44355 13.4166 5.83594V5.83594Z" fill="black" fill-opacity="0.6"/>
                        </svg>
                    </div>
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
