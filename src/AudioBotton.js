import React, {useState, useEffect} from 'react';
import './AudioBotton.css'
import {useStateValue} from './StateProvider';
import {actionTypes} from './Reducer';

function AudioBotton() {
    const [toggle, setToggle] = useState();
    const [state, dispatch] = useStateValue();

    const click = () => {
        const action = {
            type: actionTypes.AUDIO,
            Audio: !state.Audio
        }
        setToggle(false);
        dispatch(action);
    }

    return (
        <div className={`AudioBotton Toggle-${toggle}`} onMouseDown={() => setToggle(true)} onMouseUp={click}>
             {
                (state.Audio) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <rect x="2" y="2" width="42" height="42" rx="8" fill="#FF9900"/>
                        <path d="M29.4615 14.9048C33.1538 16.7143 35 19.4286 35 23.5C35 27.5714 33.1538 30.2857 29.4615 32.0952M11 19.4286V27.5714H15.6154L23 33V14L15.6154 19.4286H11ZM27.6154 20.3333C27.6154 20.3333 29.4615 21.2381 29.4615 23.5C29.4615 25.7619 27.6154 26.6667 27.6154 26.6667V20.3333Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="2" y="2" width="42" height="42" rx="8" stroke="#990303" stroke-width="4"/>
                    </svg>
                ):(
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <rect x="2" y="2" width="42" height="42" rx="8" fill="#FF9900"/>
                        <path d="M28.28 19.4743L35 27.6857M11 19.4743V27.6857H15.8L23.48 33.16V14L15.8 19.4743H11ZM35 19.4743L28.28 27.6857L35 19.4743Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="2" y="2" width="42" height="42" rx="8" stroke="#990303" stroke-width="4"/>
                    </svg> 
                )
            }
        </div>
    );
}

export default AudioBotton;