import React from "react";
const SET_AUTH_USER = 'SET_AUTH_USER';

let initialState = {
    email:null,
    password:null,
    isAuth:false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:

        default:
            return state;
    }
}

export default AuthReducer;