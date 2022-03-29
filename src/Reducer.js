export const initialState = {
    Score: "0000",
    HighScore: "0000",
    GameStates : {
        Start : false,
        Pause: false,
        Resume: false,
        Restart: false,
        Quit: false,
    }
}


export const actionTypes = {
    SETSCORE: "SETSCORE",
    SETHIGHSCORE: "SETHIGHSCORE",
    START: "START",
    PAUSE: "PAUSE",
    RESUME: "RESUME",
    RESTART: "RESTART",
    QUIT: "QUIT"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) { 
        case actionTypes.SETSCORE:
            return {
                ...state,
                Score: action.Score,
            };
        case actionTypes.SETHIGHSCORE:
            return {
                ...state,
                HighScore: action.HighScore
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
                  
        default: 
            return state;
    }
};

export default reducer;