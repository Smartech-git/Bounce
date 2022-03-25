import {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import Emoji from "./Characters/Emoji";
import Bounce from "./Characters/Images/Bounce.png";
import './Intro.css';

export default function Intro () {
    const [toggle, setToggle] = useState();
    const [load, setLoad] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        let ID;
        if(toggle === false) {
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
                navigate("/GameMode");
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
                        <img src={Bounce} alt="Bounce"/>
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
