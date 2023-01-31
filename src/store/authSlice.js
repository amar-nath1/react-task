import { createSlice } from "@reduxjs/toolkit";


let authSlice=createSlice({
    name:'authentication',
    initialState:{isLoggedIn:false,currentUser:null},
    reducers:{
        setIsLoggedIn(state,action){
            state.isLoggedIn=action.payload
        },
        setCurrentUser(state,action){
            state.currentUser=action.payload
        }
    }
})

export default authSlice.reducer

export const authActions=authSlice.actions