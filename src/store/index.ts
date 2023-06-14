import {combineReducers, createStore} from "redux";
import AuthReducer from "./reducers/AuthReducer";
import CitiesReducer from "./reducers/CitiesReducer";


let reducers = combineReducers({
    auth:AuthReducer,
    cities:CitiesReducer
});

const store = createStore(reducers);

export default store;