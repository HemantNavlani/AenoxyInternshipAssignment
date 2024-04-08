import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image : '',
    location:'',
}
const profSlice = createSlice({
    name:'prof',
    initialState,
    reducers:{
        profile:(state,action)=>{
            state.image = action.payload,
            state.location = action.payload
        },
    }
})

export const {profile} = profSlice.actions
export default profSlice.reducer