import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [],
        completed: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push({ ...action.payload, addedFrom: action.payload.addedFrom });
            fetch("http://localhost:3001/tasks/addTask", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"123456"
                },
                body: JSON.stringify(action.payload)
            }).catch((err)=>{
                console.log(err);
            })
        },
        initAddTask: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        removeTask: (state, action) => {
            state.value= state.value.filter((task)=>task.id!==action.payload);
            fetch("http://localhost:3001/tasks/removeTask/"+action.payload.id, {
                method: "DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"123456"
                },
            }).catch(err=>{
                console.log(err);
            })
        },
    },
});

export const { addTask,initAddTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;