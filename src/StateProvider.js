import React, { createContext, useContext, useReducer} from "react";

const GameContext = createContext();

export const  StateProvider = ({ reducer, initialState, children}) => (
    <GameContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </GameContext.Provider>
);

export const useStateValue = () => useContext(GameContext);
