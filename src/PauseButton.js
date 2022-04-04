import {useState, useEffect} from 'react';
import {actionTypes} from './Reducer';
import './PauseButton.css';
import {useStateValue} from './StateProvider';

function PauseButton () {
    const [state, dispatch] = useStateValue();
    const [effect, setEffect] = useState();

    useEffect(() => {
        let ID;
        if (effect === false) {
            ID = setTimeout(() => {
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
            }, 500);           
        }
        return(() => {
            clearTimeout(ID)
         }) 

    }, [effect]);

    return (
        <div className= {`PauseBotton ${effect}`} onMouseDown={()=> setEffect("Effect")} onMouseUp={() => setEffect(false)}>
           <svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g filter="url(#filter0_d_198_145)">
                <rect x="5.5" y="3.5" width="37" height="37" rx="8.5" fill="#FF9900" stroke="#990303" stroke-width="3"/>
                <rect x="16" y="13" width="3" height="17" fill="white"/>
                <rect x="30" y="13" width="3" height="17" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_198_145" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_198_145"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_198_145" result="shape"/>
                </filter>
                </defs>
            </svg>
        </div>

    )
    
}

export default PauseButton;