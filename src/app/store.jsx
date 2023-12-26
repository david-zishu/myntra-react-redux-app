import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice";
import fetchStatusSliceReducer from "../features/items/fetchStatusSlice";
import bagSliceReducer from "../features/items/bagSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    fetchStatus: fetchStatusSliceReducer,
    bag: bagSliceReducer,
  },
});
