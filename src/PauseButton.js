import {useState, useEffect} from 'react';
import {actionTypes} from './Reducer';
import {useStateValue} from './StateProvider';

function PauseButton () {
    const [state, dispatch] = useStateValue();

   const handlePauseEvent = () => {
        const action1 = {
            type : actionTypes.PAUSE,
            Pause : true
        };
        dispatch(action1);
    };

    return (
        <div className="PauseButton" onClick={handlePauseEvent} style={{ cursor: "pointer"}}>
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