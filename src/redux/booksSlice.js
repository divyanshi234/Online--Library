
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "Book A", author: "Author A", category: "Fiction", description: "A thrilling story", rating: 4 },
    { id: 2, title: "Book B", author: "Author B", category: "Sci-Fi", description: "Futuristic adventure", rating: 5 },
    { id: 3, title: "Book C", author: "Author C", category: "Non-Fiction", description: "Real-life events", rating: 3 },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
