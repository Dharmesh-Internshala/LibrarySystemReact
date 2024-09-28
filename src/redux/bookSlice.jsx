import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [], // List of books
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); // Add new book to the list
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
