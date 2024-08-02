import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        isCreateTodo : false,
        statusTodo : "",
        editTodoId : null,
}

const todoHandlerSlice = createSlice({
        name: "todoHandler",
        initialState,
        reducers: {
                updateCredantials : (state, action) =>{
                        state.isCreateTodo = action.payload.isCreateTodo ?? false;
                        state.statusTodo = action.payload.statusTodo ?? "";
                        state.editTodoId = action.payload.editTodoId ?? null;
                }
        }
})

export const {updateCredantials} = todoHandlerSlice.actions;

export default todoHandlerSlice.reducer;