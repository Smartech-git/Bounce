import {useState} from 'react';
import Emoji from "./Character/Emoji";
import Bounce from "./Character/Bounce";
import './Intro.css';

export default function Intro () {
    const [toggle, setToggle] = useState("");


    return (
        <div className = "Intro">
            <div className = "IntroBody">
                <div className = "Bounce">
                    <div className = "BounceEmoji">
                        <Emoji/>
                    </div>
                    <div className = "BounceText">
                        <Bounce/>
                    </div>
                    <p className = "Info">
                        A simple game built on React.js library. GitHub repo: github.com/Smartech-git/Bounce.git.
                    </p>
                </div>
                <div className = {`Botton ${toggle}`} onMouseDown={() => setToggle(true)} onMouseUp={() => setToggle("")}>
                   <p>Play</p> 
                </div>
            </div>
        </div>
    )
}
