import { configureStore } from "@reduxjs/toolkit";

import feedSlice from "./feed-slice";
import graphSlice from "./graph-slice";

const store = configureStore({
  reducer: { feed: feedSlice.reducer, graph: graphSlice.reducer },
});

export default store;
