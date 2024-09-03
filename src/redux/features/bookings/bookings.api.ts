import { baseApi } from "../../api/baseApi";

const bookingsapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: "/my-bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),
    createBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: "/bookings",
        method: "POST",
        body: bookingInfo,
      }),
      invalidatesTags: ["bookings"],
    }),
    updateBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: `/bookings/${bookingInfo.id}`,
        method: "PUT",
        body: bookingInfo.data,
      }),
      invalidatesTags: ["bookings"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useCreateBookingMutation,
  //   useGetSingleRoomQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useGetMyBookingsQuery,
} = bookingsapi;
