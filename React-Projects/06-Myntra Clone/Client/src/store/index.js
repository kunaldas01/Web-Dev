import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchingStatusSlice from "./fetchingStatusSlice";
import bagSlice from "./bagSlice";

const shoppingStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchingStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default shoppingStore;
