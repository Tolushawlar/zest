import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import TodoReducer from "./TodoSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        todos: TodoReducer,
    }
});

export default store;