import React from "react";

let initialState = {
        CitiesItems: [
            {name: 'Ейск',id: 1},
            {name: 'Ярославль',id: 2},
            {name: 'Воронеж',id: 3},
            {name: 'Адлер',id: 4},
            {name: 'Новгород',id: 5}
        ]
    }
;

const CitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default CitiesReducer;