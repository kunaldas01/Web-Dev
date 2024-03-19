import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import themeSlice from "./theme";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    lightTheme: themeSlice.reducer
  }
});

export default counterStore;