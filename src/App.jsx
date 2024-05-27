import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//Pages
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import Drivers from "./page/Drivers";
import History from "./page/History";
import Schedule from "./page/Schedule";
import Trips from "./page/Trips";
import Profile from "./page/Profile";

//Layout
import AppLayout from "./layout/AppLayout";
import TrackDriverLayout from "./layout/TrackDriverLayout";

//Feature
import OutletDriverInfo from "./feature/TrackDriver/OutletDriverInfo";

//ProtectedRoute

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/drivers",
          element: <Drivers />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/schedule",
          element: <Schedule />,
        },
        {
          path: "/trips",
          element: <Trips />,
        },
        {
          path: "/trips/:bookingID",
          element: <Trips />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/trackBooking",
      element: <TrackDriverLayout />,
      children: [
        {
          path: "/trackBooking",
          element: <OutletDriverInfo />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* Router */}
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
