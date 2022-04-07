import React, {useRef, useEffect, useLayoutEffect} from 'react';
import BouncyShocked from './Characters/BouncyShocked';
import BouncyConfused from './Characters/BouncyConfused';
import BouncySerious from './Characters/BouncySerious';
import './Bouncy.css';
import {useStateValue} from './StateProvider';


function Bouncy() {
    const[state, dispatch] = useStateValue();
    const BCFref = useRef();
    const BSHref = useRef();
    const BSEref = useRef();
    const TrailRef = useRef();

    useLayoutEffect(() => {
        let BCF = document.getElementsByClassName('Bouncy_Confused')[0].animate(
            [
                {opacity : 1},
                {opacity: 1, offset: 0.99},
                {opacity: 0, offset: 1}
            ],
            {
                duration: 2000,
                fill: "forwards"
            }
        );
        let BSH = document.getElementsByClassName('Bouncy_Shocked')[0].animate(
            [
                {opacity : 1},
                {opacity: 1, offset: 0.99},
                {opacity: 0, offset: 1}
            ], 
            { 
                delay: + BCF.effect.getComputedTiming().duration,
                duration: 1000,
                fill: "forwards"
            }
        );
        let T =  document.getElementsByClassName("trails")[0].animate(
            [
                {transform: "scaleX(0.5) rotate(10deg)"},
                {transform: "scaleX(1) rotate(10deg)"}
            ],
            {
                delay: BSH.effect.getComputedTiming().delay + BCF.effect.getComputedTiming().duration - 1000,
                duration: 300, 
                easing: "linear",
                fill: "forwards",
            }
        )
        let BSE = document.getElementsByClassName('Bouncy_Serious')[0].animate(
            [
                {opacity : 0},
                {opacity: 1},
            ],
            {
                delay: BSH.effect.getComputedTiming().duration + BSH.effect.getComputedTiming().delay,
                duration: 50,
                fill: "forwards"
            }
        );
        BCFref.current = BCF;
        BSHref.current = BSH;
        BSEref.current = BSE;
        TrailRef.current = T
    }, [])

    useEffect(() => {
        if (state.GameStates.Start === true){
            BCFref.current.play();
            BSHref.current.play();
            BSEref.current.play();
            TrailRef.current.play();
        } else if(state.GameStates.Start === false) {
            BCFref.current.cancel();
            BSHref.current.cancel();
            BSEref.current.cancel();
            TrailRef.current.cancel();
        }
    }, [state.GameStates.Start]);
    
        
    return (
        <div className="Bouncy">
            <div className="Expressions">
                <BouncyShocked/>
                <BouncyConfused/>
                <BouncySerious/>
            </div>
            <div className="trails">
                <svg className='trailsSVG' xmlns="http://www.w3.org/2000/svg" width="105" height="64" viewBox="0 0 105 70" fill="none">
                    <g filter="url(#filter0_f_531_324)">
                    <path d="M4 16L101 4V66L4 54.5V16Z" fill="url(#paint0_linear_531_324)"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_531_324" x="0" y="0" width="105" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_531_324"/>
                    </filter>
                    <linearGradient id="paint0_linear_531_324" x1="101" y1="35" x2="8.61904" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0.159436" stop-color="#FF0000"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Bouncy;