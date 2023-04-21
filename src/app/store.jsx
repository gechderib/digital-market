import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/signup/signupSlice"
const store = configureStore({
    reducer: {
        users:userReducer
    }
})


export default store;