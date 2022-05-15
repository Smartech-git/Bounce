import {useState, useEffect} from 'react';
import {actionTypes} from './Reducer';
import './PauseButton.css';
import {useStateValue} from './StateProvider';

function PauseButton () {
    const [state, dispatch] = useStateValue();
    const [effect, setEffect] = useState();

    useEffect(() => {
        if(state.GameStates.GameOver === false){
            if (effect === false) {
                const action = {
                    type : actionTypes.PAUSE,
                    Pause : true
                };
                const action2 = {
                    type: actionTypes.RESTART,
                    Restart : false
                };
                const action3 = {
                    type: actionTypes.RESUME,
                    Resume : false
                }
                dispatch(action);
                dispatch(action2);
                dispatch(action3);      
            }
        }
        
    }, [effect, state.GameStates.GameOver]);

    return (
        <div className= {`PauseBotton ${effect}`} onMouseDown={() => setEffect("Effect")} onMouseUp={() => setEffect(false)}>
            <svg className='PauseB' xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <rect x="2" y="2" width="42" height="42" rx="11" fill="#FF9900" stroke="#990303" stroke-width="4"/>
                <rect x="13.8" y="13.6562" width="4" height="19.55" fill="white"/>
                <rect x="28.8999" y="13.6562" width="4" height="19.55" fill="white"/>
            </svg>
        </div>

    )
    
}

export default PauseButton;