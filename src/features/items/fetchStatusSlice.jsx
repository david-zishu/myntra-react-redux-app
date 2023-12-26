import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchDone: false, // false: 'pending' , true: 'done'
  currentlyFetching: false,
};

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState,
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const { markFetchDone, markFetchingStarted, markFetchingFinished } =
  fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;
