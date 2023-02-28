import { configureStore } from "@reduxjs/toolkit";
import hotelDataSliceReducer from "./hotelDataSlice";

export const store = configureStore({
  reducer: {
    hotelData: hotelDataSliceReducer,
  },
});
