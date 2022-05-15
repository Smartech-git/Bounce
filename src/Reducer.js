
export const initialState = {
    HighScore: false,
    Audio: true,
    Seek: false,
    GameStates : {
        Start : false,
        Pause: false,
        Resume: false,
        Restart: false,
        Quit: false,
        GameOver: false
    }
}
export const actionTypes = {
    SEEK: "SEEK",
    AUDIO: "AUDIO",
    HIGHSCORE: "HIGHSCORE",
    START: "START",
    PAUSE: "PAUSE",
    RESUME: "RESUME",
    RESTART: "RESTART",
    QUIT: "QUIT",
    GAMEOVER: "GAMEOVER"
}
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.HIGHSCORE:
            return {
                ...state,
                HighScore : action.HighScore
            };
        case actionTypes.SEEK:
            return {
                ...state,
                Seek : action.Seek
            };
        case actionTypes.AUDIO:
        return {
            ...state,
            Audio: action.Audio
        };
        case actionTypes.START: 
            return {
                ...state,
                GameStates: {
                    ...state.GameStates,
                    Start: action.Start
                }
            };
        case actionTypes.PAUSE:
            return {
                ...state,
                GameStates: {
                    ...state.GameStates,
                    Pause: action.Pause
                }
            };
        case actionTypes.RESTART:
            return {
                ...state,
                GameStates : {
                    ...state.GameStates,
                    Restart: action.Restart
                }
            };
        case actionTypes.RESUME:
            return {
                ...state,
                GameStates : {
                    ...state.GameStates,
                    Resume: action.Resume
                }
            };
              
        case actionTypes.QUIT:
            return {
                ...state,
                GameStates : {
                    ...state.GameStates,
                    Quit: action.Quit
                }
            };
        case actionTypes.GAMEOVER:
            return {
                ...state,
                GameStates : {
                    ...state.GameStates,
                    GameOver: action.GameOver
                }
            }
                  
        default: 
            return state;
    }
};

export default reducer;