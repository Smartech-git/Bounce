import React, {useState, useEffect}from 'react';
import './PausePage.css';
import Pause from './Characters/Images/Pause.png';
import { useStateValue } from './StateProvider';
import {actionTypes} from './Reducer';


function PausePage() {
    const [state, dispatch] = useStateValue();
    const [resume, setResume] = useState();
    const [restart, setRestart]  = useState();
    const [quit, setQuit] = useState();
    const [unmount, setUnmount] = useState()


    useEffect(() => {
        let ID;
        if(resume === false) {
            ID = setTimeout(() => {   
                const action ={
                    type: actionTypes.PAUSE,
                    Pause: false
                }
                const action2 = {
                    type: actionTypes.RESUME,
                    Resume: true
                }
                dispatch(action);
                dispatch(action2);
            }, 500);
        }
        return(() => { 
            clearTimeout(ID);
            setUnmount("Unmount")
        })
    }, [resume]);

    useEffect(() => {
        let ID;
        if(restart === false) {
            ID = setTimeout(()=>  {
                const action = {
                    type: actionTypes.RESTART,
                    Restart : true
                } 
                const action2 = {
                    type: actionTypes.PAUSE,
                    Pause: false
                }
                dispatch(action);
                dispatch(action2);
            }, 500);
        }
        return(() => { 
            clearTimeout(ID);
            setUnmount("Unmount")
        })
    }, [restart]);


    useEffect(() => {
        let ID;
        if(quit === false) {
            ID = setTimeout(()=>  {  
                const action  = {
                    type: actionTypes.PAUSE,
                    Pause: false
                }
                const action2 = {
                    type: actionTypes.START,
                    Start : false
                }
                const action3 = {
                    type: actionTypes.QUIT,
                    Quit : true
                }
                dispatch(action);
                dispatch(action2);
                dispatch(action3);
            }, 500);
        }
        return(() => { 
            clearTimeout(ID);
        })
    }, [quit]);


    return (
        <div className={`PausePage ${unmount}`}>
            <div className="InnerTab">
                <div className="Pause">
                    <img src={Pause} alt="Pause" decoding="sync"></img>
                </div>
                <div className="Options">
                    <div className={`Resume botton${resume}`} onMouseDown={() => setResume(true)} onMouseUp={() => setResume(false)}>
                        <span>Resume</span>
                    </div>
                    <div className={`Restart botton${restart}`} onMouseDown={() => setRestart(true)} onMouseUp={() => setRestart(false)}>
                        <span>Restart</span>
                    </div>
                    <div className ={`Quit botton${quit}`} onMouseDown={() => setQuit(true)} onMouseUp={() => setQuit(false)}>
                        <span>Quit</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PausePage;