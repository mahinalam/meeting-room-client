import CreateSlot from "../pages/admin/CreateSlots";
import AllRooms from "../pages/admin/AllRooms";
import CreateRoom from "../pages/admin/CreateRoom";
// import AvailableSlots from "../pages/admin/AvailableSlots";
import AllBookings from "../pages/admin/AllBookings";

export const adminPaths = [
  {
    name: "Room Management",
    children: [
      {
        name: "All Rooms",
        path: "get-all-rooms",
        element: <AllRooms />,
      },
      {
        name: "Create Room",
        path: "create-room",
        element: <CreateRoom />,
      },
    ],
  },
  {
    name: "Slot Management",
    children: [
      {
        name: "Create Slot",
        path: "create-slot",
        element: <CreateSlot />,
      },
      // {
      //   name: "All Slots",
      //   path: "get-all-slots",
      //   element: <AvailableSlots />,
      // },
    ],
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "All Bookings",
        path: "get-all-bookings",
        element: <AllBookings />,
      },
    ],
  },
];
