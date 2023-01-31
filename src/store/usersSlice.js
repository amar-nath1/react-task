import { createSlice } from "@reduxjs/toolkit";
let users = [
    {
    branchId: 10001,
    userName: "testuser01",
    password: "pa55w0rd001",
    firstName: "John",
    middleName: "Sanchez",
    lastName: "Doe",
    position: "Developer",
    },
    {
    branchId: 10002,
    userName: "testuser02",
    password: "pa55w0rd002",
    firstName: "Ricardo",
    middleName: "Dubov",
    lastName: "Martinez",
    position: "Lead Developer",
    },
    {
    branchId: 10003,
    userName: "testuser03",
    password: "pa55w0rd003",
    firstName: "Gol",
    middleName: "Denver",
    lastName: "Roger",
    position: "Project Manager",
    }
    ];


let usersSlice=createSlice({
    name:'users',
    initialState:{usersArr:users},
    reducers:{
        addUser(state,action){
            state.usersArr.push(action.payload)
        },

        deleteUser(state,action){
            state.usersArr=state.usersArr.filter((user)=>{
                return user.userName!=action.payload
            })
        },
        
    }
})

export default usersSlice.reducer
export const userActions=usersSlice.actions