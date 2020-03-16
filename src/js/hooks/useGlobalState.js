import React from 'react'
import { createContext, useReducer, useContext, useState } from 'react';

/* Action Types */

/* Define a context and a reducer for updating the context */
const GlobalStateContext = createContext();

const globalStateReducer = (state, action) => {
    return {
      ...state,
      [action.type] : action.payload
    }
};

/* Export a component to provide the context to its children. This is used in our _app.js file */
export const GlobalStateProvider = ({initialState, children }) => {
    const [state, dispatch] = useReducer(
        globalStateReducer,
        initialState
    );

    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    );
};

/*
Default export is a hook that provides a simple API for updating the global state.
This also allows us to keep all of this state logic in this one file
*/

const useGlobalState = (name) => {
    const [state, dispatch] = useContext(GlobalStateContext);
    
    const setState = (newState) => {
      dispatch({
          type: name,
          payload: newState
      });
    };

    return [state[name], setState];
};

export default useGlobalState;