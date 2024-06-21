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
        todoDeleted(state, action){
            // Construct a new array immutably
            const newTodos = state.quotes.filter(todo => todo.author !== 'Mark Twain')
            // "Mutate" the existing state to save the new array
            state.quotes = newTodos
          }
    }
})


export const {quotesAdded, todoDeleted} = quotesSlice.actions;

export default quotesSlice.reducer;