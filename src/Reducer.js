
export const initialState = {
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
    SETSCORE: "SETSCORE",
    SETHIGHSCORE: "SETHIGHSCORE",
    START: "START",
    PAUSE: "PAUSE",
    RESUME: "RESUME",
    RESTART: "RESTART",
    QUIT: "QUIT",
    GAMEOVER: "GAMEOVER"
}
const reducer = (state, action) => {
    switch (action.type) {
        // case actionTypes.SETSCORE:
        //     let ScorePoints = JSON.parse(localStorage.getItem("ScorePoints"));
        //     ScorePoints.score = action.Score;
        //     // return {
        //     //     ...state,
        //     // }
        // case actionTypes.SETHIGHSCORE:
        //     return {
        //         ...state,
        //         HighScore: action.HighScore
        //     };
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