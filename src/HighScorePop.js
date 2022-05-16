import {useState, useEffect} from 'react';
import {useStateValue} from './StateProvider';
import HighScorex from './Characters/Images/HighScorex.png';

function HighScorePop (){
    const [state, {}] = useStateValue();
    const [Pop, setPop] = useState();

    useEffect(() =>{
        setPop(false);
        if(state.HighScore === true){
            setPop(true);
        }
    }, [state.HighScore]);

    return (
        <div className={`HighscorePop Pop${Pop}`}>
            <img src={HighScorex} alt="High Score"></img>
        </div>
    )
}

export default HighScorePop;