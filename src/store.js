import {configureStore} from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlice";
import taskReducer from "./Reducers/tasksSlice";
import todoReducer from "./Reducers/todoSlice";
import optionReducer from './Reducers/optionSlice';

export default configureStore({
    reducer:{
        goals:goalReducer,
        tasks:taskReducer,
        todos:todoReducer,
        option:optionReducer
    }
})