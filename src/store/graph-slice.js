import { createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
  name: "graph",
  initialState: {
    allData: [],
    data: [],
  },
  reducers: {
    setAllData(state, action) {
      state.allData = action.payload.data;
    },
    setData(state, action) {
      state.data = action.payload.data;
    },
    oneMonthH(state) {
      const getAllData = [...state.allData];
      const oneMonthLength = Math.round(getAllData.length / 6); 
      const oneMonthData = getAllData.slice(0, oneMonthLength); // 1 month Data
      state.data = oneMonthData;
    },
    sevenDayH(state) {
      const getAllData = [...state.allData];
      const oneMonthLength = Math.round(getAllData.length / 6); 
      const oneMonthData = getAllData.slice(0, oneMonthLength); // 1 month Data
      const sevenDayLength = Math.round((oneMonthData.length / 30) * 7);
      const sevenDayData = oneMonthData.slice(0, sevenDayLength); // 7 day Data
      state.data = sevenDayData;
    },
    lastDayH(state) {
      const getAllData = [...state.allData];
        const oneMonthLength = Math.round(getAllData.length / 6); 
        const oneMonthData = getAllData.slice(0, oneMonthLength); // 1 month Data
        const oneDayLength = Math.round(oneMonthData.length / 30);
        const oneDayData = oneMonthData.slice(0, oneDayLength); // 1  day Data
        state.data = oneDayData;
    },
  },
});

export const graphActions = graphSlice.actions;

export default graphSlice;
