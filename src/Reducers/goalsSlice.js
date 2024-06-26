import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [],
        completed: [],
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push({ ...action.payload, addedFrom: action.payload.addedFrom });
            fetch("http://localhost:3001/goals/addGoals", {
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
        initAddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.value= state.value.filter((goals)=>goals.id!==action.payload);
            fetch("http://localhost:3001/goals/removeGoals/"+action.payload.id, {
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

export const { addGoal,initAddGoal, removeGoal} = goalsSlice.actions;
export default goalsSlice.reducer;