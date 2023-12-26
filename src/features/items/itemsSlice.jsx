import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItem: (state, action) => {
      return action.payload;
    },
  },
});

export const { addInitialItem } = itemsSlice.actions;
export default itemsSlice.reducer;
