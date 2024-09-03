import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../../src/pages/sharred/Login/Login";
import Signup from "../../src/pages/sharred/Signup/Signup";
import Home from "../pages/home/home/Home";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import AboutUs from "../pages/About/About";
import ContactUs from "../pages/Contact/Contact";
import Checkout from "../pages/Checkout/Checkout";
import DashboardLayout from "../components/layout/DashboardLayout";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin-route";
// import NotFound from "../pages/notFound/notFound";
import MyBookings from "../pages/user/MyBookings";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/notFound/NotFound";
// import NotFound from "../pages/notFound/NotFound";
// import NotFound from "../pages/notFound/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "rooms/:id",
        element: (
          <ProtectedRoute role="user">
            <RoomDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
