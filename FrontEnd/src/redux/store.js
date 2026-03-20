import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice.js"
import videoReducer from "./videoSlice"


export const store = configureStore({
    reducer:{
        user:userSlice,
        video:videoReducer

    }
})