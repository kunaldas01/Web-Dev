import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'lightTheme',
  initialState: true,
  reducers: {
    toggle: (state) => {
      return state = !state;
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice;