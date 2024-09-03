// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchRooms = createAsyncThunk(
//   "/rooms",
//   async ({ searchTerm, sortOrder }) => {
//     const res = await axios.get("/api/rooms", {
//       params: {
//         search: searchTerm,
//         sort: sortOrder,
//       },
//     });
//     return res.data;
//   }
// );

// const roomSlice = createSlice({
//   name: "rooms",
//   initialState: {
//     rooms: [],
//     searchTerm: "",
//     sortOrder: "ascending", // default sort order
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setSearchTerm(state, action) {
//       state.searchTerm = action.payload;
//     },
//     setSortOrder(state, action) {
//       state.sortOrder = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRooms.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchRooms.fulfilled, (state, action) => {
//         state.rooms = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchRooms.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setSearchTerm, setSortOrder } = roomSlice.actions;

// export default roomSlice.reducer;
