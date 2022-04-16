import {useState, useEffect,  useLayoutEffect, useRef} from 'react';
import Bouncy from './Bouncy';
import PlayBuilding from './PlayBuilding';
import {useStateValue} from './StateProvider';
import { actionTypes} from './Reducer';

function Bundle({firstScene, secondScene, thirdScene, platform, clouds, trials, bouncy}){
    const [state, dispatch] = useStateValue();
    const [trig, setTrig] = useState(false);
    const t = useRef(false);
    const Obstacle1Ref = useRef();
    const Obstacle2Ref = useRef();
    const Obstacle3Ref = useRef();
    const BouncyRef = useRef();
    const plafRef = useRef();
    
    useEffect(() =>{
        BouncyRef.current = document.getElementsByClassName("Expressions")[0];
        Obstacle1Ref.current = document.getElementsByClassName("ObstacleOne")[0];
        Obstacle2Ref.current = document.getElementsByClassName("ObstacleTwo")[0];
        Obstacle3Ref.current = document.getElementsByClassName("ObstacleThree")[0];
        plafRef.current = document.getElementsByClassName("PlayBuilding")[0];
    }, []);

    useEffect(() =>{
        let ID = setInterval(() =>{
            let Bf = BouncyRef.current.getBoundingClientRect();
            // console.log(`Bouncy - Y:${Math.floor(Bf.y)} right:${Math.floor(Bf.right)}`)
            let Ob1 = Obstacle1Ref.current.getBoundingClientRect();
            // console.log(`Obs1 - Y:${Math.floor(Ob1.y)} left:${Math.floor(Ob1.x)}`);
            let Ob2 = Obstacle2Ref.current.getBoundingClientRect();
            // console.log(`Obs2 - Y: ${Math.floor(Ob2.y)} left:${Math.floor(Ob2.x)}`);
            let Ob3 = Obstacle3Ref.current.getBoundingClientRect();
            // console.log(`Obs3 - Y:${Math.floor(Ob3.y)} left:${Math.floor(Ob3.x)} `);
            if(Math.floor(Bf.right) >= Math.floor(Ob1.x) && Math.floor(Bf.x) <= Math.floor(Ob1.right)){
                if(Math.floor(Bf.y) >= Math.floor(Ob1.y)){
                    setTrig(true)
                }
            } else if(Math.floor(Bf.right) >= Math.floor(Ob2.x) && Math.floor(Bf.x) <= Math.floor(Ob2.right)){
                if(Math.floor(Bf.y) >= Math.floor(Ob2.y)){
                    setTrig(true)
                }
            } else if(Math.floor(Bf.right) >= Math.floor(Ob3.x) && Math.floor(Bf.x) <= Math.floor(Ob3.right)){
                if(Math.floor(Bf.y) >= Math.floor(Ob3.y)){
                    setTrig(true)
                }
            }
            

        }, 10);

        return(() => {
            clearInterval(ID);
        })
    });

    useEffect(() =>{
        if(trig === true){
            firstScene.pause();
            secondScene.pause();
            thirdScene.pause();
            platform.pause();
            clouds.pause();
            bouncy.pause();
            const action = {
                type : actionTypes.GAMEOVER,
                GameOver: true
            }
            dispatch(action);
        }
    }, [trig])
    
    return (
        <div className="Bundle">
          <Bouncy/>
          <PlayBuilding Trigger = {trig}/>  
        </div>
    );
};

export default Bundle;