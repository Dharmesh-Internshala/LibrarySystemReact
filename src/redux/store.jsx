import {configureStore} from "@reduxjs/toolkit"
import bookReducer from "./bookSlice";  // Since both files are in redux folder

export const store = configureStore({
  reducer: {
    books : bookReducer,
  }
})

