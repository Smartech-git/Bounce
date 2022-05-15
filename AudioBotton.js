import React, {useState} from 'react';

function AudioBotton() {
    const [Audio, setAudio] = useState(true)

    return (
        <div className='AudioBotton' onClick={setAudio(False)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
    <rect x="2" y="2" width="42" height="42" rx="8" fill="#FF9900"/>
    <path d="M29.1845 13.9092C32.8214 15.7277 34.6399 18.4554 34.6399 22.5469C34.6399 26.6384 32.8214 29.3661 29.1845 31.1845M11 18.4554V26.6384H15.5461L22.8199 32.0937V13L15.5461 18.4554H11ZM27.3661 19.3646C27.3661 19.3646 29.1845 20.2738 29.1845 22.5469C29.1845 24.8199 27.3661 25.7292 27.3661 25.7292V19.3646Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="2" y="2" width="42" height="42" rx="8" stroke="#990303" stroke-width="4"/>
    </svg>
        </div>
    );
}

export default AudioBotton;