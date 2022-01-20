import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Emoji from "./Character/Emoji";
import Bounce from "./Character/Bounce";
import './Intro.css';

export default function Intro () {
    const [toggle, setToggle] = useState("false");
    const navigate = useNavigate();
    
    useEffect(() => {
        let ID;
        if(toggle === "") {
            ID = setInterval(()=> {
                navigate("/Loading...");
            }, 500);
        }

        return(() => { 
            clearInterval(ID);
        })
        
    },[toggle]);

    const handleEffect =() => {
        setToggle("");
    }

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
                {/* <Link to="loading..." style={{textDecoration: "none"}}> */}
                    <div className = {`Botton ${toggle}`} onMouseDown={() => setToggle(true)} onMouseUp={handleEffect}>
                    <p>Play</p>
                    </div>
                {/* </Link> */}
            </div>
        </div>
    )
}
