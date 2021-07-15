import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
    username: 'unknown',
    isAuthenticated: false,
}

const reducer = (state, action) => {
    const { username, isAuthenticated } = action.message || {};

    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username };

        case 'SET_ISAUTHENTICATED':
            return { ...state, isAuthenticated }

        default:
            return state;
    }
}

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuthStore = () => useContext(AuthContext);