import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
    initialState: {
        activeMenu: 0,
        activeBottomMenu: 0,

    },
    name: "mainMenu",
    reducers: {
        CHANGE_MAIN_MENU: (state, action) => {
            state.activeMenu = action.payload
        },
        CHANGE_BOTTOM_MENU: (state, action) => {
            state.activeBottomMenu = action.payload
        }
    }
})
export default menuSlice.reducer;
export const {CHANGE_MAIN_MENU,CHANGE_BOTTOM_MENU} = menuSlice.actions