import authReducer from "./authSlice"
import { configureStore } from "@reduxjs/toolkit"
import usersReducers from "./usersSlice"

let store=configureStore({

    reducer:{auth:authReducer,users:usersReducers}

})

export default store