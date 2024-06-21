import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers:{
        quotesAdded(state, action){
            state.push(action.payload)
        },
    }
})


export const {quotesAdded} = quotesSlice.actions;

export default quotesSlice.reducer;