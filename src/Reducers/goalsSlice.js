import {createSlice} from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const {addGoal} = goalsSlice.actions;
export default goalsSlice.reducer;