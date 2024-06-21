import { createSlice } from '@reduxjs/toolkit';

const initialState = {quotes: []};

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers:{
        quotesAdded(state, action){
            console.log(action.payload)
            console.log(state)
            state.quotes = action.payload
        },
    }
})


export const {quotesAdded} = quotesSlice.actions;

export default quotesSlice.reducer;