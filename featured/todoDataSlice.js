import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoDataSlice = createSlice({
    name : "todoData",
    initialState,
    reducers: {
        addData: (state,action) =>{
            state.push(action.payload)
        }
    }
})

export const {addData} = todoDataSlice.actions;
export default todoDataSlice.reducer;
