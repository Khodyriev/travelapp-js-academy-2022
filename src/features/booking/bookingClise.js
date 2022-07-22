import { createSlice } from '@reduxjs/toolkit';
import { getBooks, putBook, dellBook } from './bookingActions';

const initialState = {
    loading: false,
    books: [],
    book: {},
    error: null,    
  }

  const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
   
    },
    extraReducers: {
      [getBooks.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [getBooks.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.books = payload        
      },
      [getBooks.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
      [putBook.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [putBook.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.book = payload 
      },
      [putBook.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
      [dellBook.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [dellBook.fulfilled]: (state) => {
        state.loading = false        
      },
      [dellBook.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
    },
  })
  
  export default booksSlice.reducer