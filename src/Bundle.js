import { useEffect, useRef} from 'react';
import Bouncy from './Bouncy';
import PlayBuilding from './PlayBuilding';
import { useStateValue} from './StateProvider';
import { actionTypes} from './Reducer';

function Bundle(){
    const [state, dispatch] = useStateValue();
    const Obstacle1Ref = useRef();
    const Obstacle2Ref = useRef();
    const Obstacle3Ref = useRef();
    const PlatformRef = useRef();
    const BouncyRef = useRef();
    const plafRef = useRef();
    const speed = useRef(1)
    
    useEffect(() =>{
        let t = 3000;
        let P = document.getElementsByClassName("PlayBuilding")[0].animate(
            [
              {transform: "translateX(0%)"},
              {transform: "translateX(-75%)"}
            ],
            {
              delay: t,
              duration: 9000,
              easing: 'linear',
              iterations: Infinity
            }
          );
        PlatformRef.current = P;
        BouncyRef.current = document.getElementsByClassName("Expressions")[0];
        Obstacle1Ref.current = document.getElementsByClassName("Obstacle1")[0];
        Obstacle2Ref.current = document.getElementsByClassName("Obstacle2")[0];
        Obstacle3Ref.current = document.getElementsByClassName("Obstacle3")[0];
        plafRef.current = document.getElementsByClassName("PlayBuilding")[0];
    }, []);

    useEffect(() =>{
        let ID;
        if(state.GameStates.Start === true && state.GameStates.GameOver === false){
            ID = setInterval(() =>{
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
                        window.navigator.vibrate(200);
                        const action = {
                            type : actionTypes.GAMEOVER,
                            GameOver: true
                        }
                        dispatch(action);
                    }
                } else if(Math.floor(Bf.right) >= Math.floor(Ob2.x) && Math.floor(Bf.x) <= Math.floor(Ob2.right)){
                    if(Math.floor(Bf.y) >= Math.floor(Ob2.y)){
                        window.navigator.vibrate(200);
                        const action = {
                            type : actionTypes.GAMEOVER,
                            GameOver: true
                        }
                        dispatch(action);
                    }
                } else if(Math.floor(Bf.right) >= Math.floor(Ob3.x) && Math.floor(Bf.x) <= Math.floor(Ob3.right)){
                    if(Math.floor(Bf.y) >= Math.floor(Ob3.y)){
                        window.navigator.vibrate(200);
                        const action = {
                            type : actionTypes.GAMEOVER,
                            GameOver: true
                        }
                        dispatch(action);
                    }
                }
            }, 10);
        } else {
            clearInterval(ID)
        }

        return(() => {
            clearInterval(ID);
        })
    }, [state.GameStates.Start, state.GameStates.GameOver]);

    useEffect(() => {
        let ID;
        if(state.GameStates.Start === true && state.GameStates.Pause === false){
            speed.current=1;
            ID = setInterval(() =>{
            speed.current = speed.current + 0.3;
            PlatformRef.current.updatePlaybackRate(speed.current);
            }, 50*1000);
        }else if(state.GameStates.Start === false){
            speed.current=1;
        }
        return(() =>{
        clearInterval(ID)
        })

    }, [state.GameStates.Start, state.GameStates.Pause]);

    useEffect(() => {
        if(state.GameStates.Start === true){
            PlatformRef.current.cancel();
            PlatformRef.current.play();
        } else{
            PlatformRef.current.cancel();
            PlatformRef.current.pause();
        }
    }, [state.GameStates.Start])
    
    useEffect(() => {
        if(state.GameStates.Pause === true || state.GameStates.GameOver === true){
            PlatformRef.current.pause()
        }else if(state.GameStates.Resume === true){
            PlatformRef.current.play()
        }else if(state.GameStates.Quit === true){
            PlatformRef.current.cancel()
        }else if (state.GameStates.Restart === true){
            speed.current = 1;
            PlatformRef.current.cancel();
            PlatformRef.current.play();
        }
    }, [state.GameStates.Pause, state.GameStates.Resume, state.GameStates.Quit, state.GameStates.Restart, state.GameStates.GameOver])

    return (
        <div className="BundleB">
          <Bouncy/>
          <PlayBuilding/>  
        </div>
    );
};

export default Bundle;