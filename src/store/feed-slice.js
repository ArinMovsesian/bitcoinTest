import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feeds: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    replaceFeed(state, action) {
      state.feeds = action.payload.feeds;
    },
    isLoading(state, action) {
      state.isLoading = action.payload.status;
    },
    hasError(state, action) {
      state.error = action.payload.error;
    },
  },
});

export const sliceActions = feedSlice.actions;

export default feedSlice;
