import React from "react";

let initialState = {
        CitiesItems: [
            {name: 'Ейск', id: 1},
            {name: 'Ярославль', id: 2},
            {name: 'Воронеж', id: 3},
            {name: 'Адлер', id: 4},
            {name: 'Новгород', id: 5}
        ],
        cityPage: {
            city: 'Воронеж',
            country: 'Россия',
            services: [
                {name: 'катание не хуе', id: 1},
                {name: 'gay sex', id: 2},
                {name: 'fisting ass', id: 3},
                {name: 'suction', id: 4},
            ],
            yachts: [
                {name: 'Porshe', id: 1},
                {name: 'Lamba', id: 2},
                {name: 'Lada', id: 3},
                {name: 'Slave', id: 4},
                {name: 'Fisting', id: 5},
            ]
        }
    }
;

const CitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default CitiesReducer;