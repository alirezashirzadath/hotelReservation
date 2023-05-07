import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainReducer from "./main/mainSlice";
import menuReducer from "./main/menuSlice";

const reducer = combineReducers({
    mainReducer, menuReducer
})

export const store = configureStore({
    reducer,
})