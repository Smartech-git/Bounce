import React from 'react';
import './Loading.css';

function Loading() {
    return (
        <div className='Loading'>
         <div className='Loading-animate'>
            <div className='point'></div>
            <div className='point'></div>
            <div className='point'></div>
            <div className='point'></div>
         </div> 
        </div>
    );
}

export default Loading;