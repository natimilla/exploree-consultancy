import { createSlice } from "@reduxjs/toolkit"
const LoadingDisplayContainer=createSlice({
    name:'Loading',
    initialState:{LoadingState:false,errorState:false},
    reducers:{
        LoadingStateHandler(state){
            state.LoadingState=!state.LoadingState;
        },
        ErrorStateHandler(state){
            state.errorState=!state.errorState
        },
        
    }
})
export const LoadingActions=LoadingDisplayContainer.actions;
export default LoadingDisplayContainer.reducer