import {createSlice} from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [],
        completed: [],
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
        },
        removeGoal: (state, action) =>{
            const index = state.value.findIndex(goal => goal.id === action.payload.id);
            if (index !== -1) {
                const [removedGoal] = state.value.splice(index, 1);
                state.completed.push(removedGoal);
            }
        },
    },
});

export const {addGoal, removeGoal} = goalsSlice.actions;
export default goalsSlice.reducer;