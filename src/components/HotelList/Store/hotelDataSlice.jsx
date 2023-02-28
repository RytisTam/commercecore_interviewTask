import { createSlice } from "@reduxjs/toolkit";
import hotelData from "../../../data/hotels.json";

const initialState = {
  value: hotelData,
};
export const counterSlice = createSlice({
  name: "hotelList",
  initialState,
  reducers: {
    sortAZ: (state) => {
      state.value = state.value.sort((a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      );
    },
    sortZA: (state) => {
      state.value = state.value
        .sort((a, b) =>
          a.name.localeCompare(b.name, "en", { sensitivity: "base" })
        )
        .reverse();
    },
    sortPriceAsc: (state) => {
      state.value = state.value.sort((a, b) => {
        return a.price_eur - b.price_eur;
      });
    },
    sortPriceDesc: (state) => {
      state.value = state.value
        .sort((a, b) => {
          return a.price_eur - b.price_eur;
        })
        .reverse();
    },
    search: (state, action) => {
      state.value = hotelData.filter((vl) =>
        vl.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      if (action.payload === "") {
        state.value = hotelData;
      }
    },
  },
});

export const { sortAZ, sortZA, sortPriceAsc, sortPriceDesc, search } =
  counterSlice.actions;

export const selectHotelList = hotelData;

export default counterSlice.reducer;
