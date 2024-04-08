import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : '',
    userName:'',
    email:'',
    password:'',
    check:false,
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signup:(state,action)=>{
            state.name = action.payload,
            state.userName = action.payload,
            state.email = action.payload,
            state.password = action.payload,
            state.check= action.payload
        },
    }
})

export const {signup} = authSlice.actions
export default authSlice.reducer