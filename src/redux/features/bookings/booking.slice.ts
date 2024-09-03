/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

type TBookingState = {
  room: string;
  user: string;
  roomName: string;
  cost: number;
  email: string;
  name: string;
  address: string;
  date: string;
  phone: string;
  slots: string[];
};

const initialState: TBookingState = {
  room: "",
  user: "",
  roomName: "",
  cost: 0,
  email: "",
  name: "",
  address: "",
  date: "",
  phone: "",
  slots: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      const bookingInfo = action.payload;
      console.log("action", bookingInfo);
      // Update the state with the new booking information
      return { ...state, ...bookingInfo };
      //   state.token = token;
    },
    clearBooking: (state) => {
      return initialState;
    },
  },
});

export const { setBooking, clearBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
