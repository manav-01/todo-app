import { configureStore } from "@reduxjs/toolkit";
import todoHandlerSlice from "@/featured/todoHandlerSlice";
import authSlice from "@/featured/authSlice";
import todoDataSlice from "@/featured/todoDataSlice";

const store = configureStore({
    reducer : {
        todoHandler : todoHandlerSlice,
        auth:authSlice,
        todoData: todoDataSlice
    }
});

export default  store;