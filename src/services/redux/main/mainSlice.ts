import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice({
    initialState: {
        darkMode: false,
    },
    name: "main",
    reducers: {
        CHANGE_THEME_MODE: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
})
export default mainSlice.reducer;
export const {CHANGE_THEME_MODE} = mainSlice.actions