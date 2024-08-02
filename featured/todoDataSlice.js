import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos :[]
}

const todoDataSlice = createSlice({
    name : "todoData",
    initialState,
    reducers: {
        addData: (state,action) =>{
            state.todos = []
            state.todos.push(...action.payload);
        }
    }
})

export const {addData} = todoDataSlice.actions;
export default todoDataSlice.reducer;
