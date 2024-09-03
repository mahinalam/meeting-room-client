/* eslint-disable @typescript-eslint/no-unused-vars */
// import { TQueryParams } from "../../../pages/bookingForm/BookingForm";
import { TQueryParams } from "../../../pages/RoomDetails/RoomDetails";
import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSlots: builder.query({
      query: (args) => {
        console.log("args", args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/slots/availability",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["slots"],
    }),
    getSingleSlot: builder.mutation({
      query: (ids) => {
        return {
          url: "/slots/get-single-slot",
          method: "POST",
          body: ids,
        };
      },
      invalidatesTags: ["slots"],
    }),
    createSlots: builder.mutation({
      query: (slotInfo) => {
        return {
          url: "/slots",
          method: "POST",
          body: slotInfo,
        };
      },
      invalidatesTags: ["slots"],
    }),
    updateSlots: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: "/slots",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["slots"],
    }),
    deleteSlot: builder.mutation({
      query: (id: string) => {
        return {
          url: "/slots",
          method: "DELETE",
        };
      },
      invalidatesTags: ["slots"],
    }),
  }),
});

export const {
  useGetAvailableSlotsQuery,
  useCreateSlotsMutation,
  useGetSingleSlotMutation,
  useUpdateSlotsMutation,
} = slotApi;
