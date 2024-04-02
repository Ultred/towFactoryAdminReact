import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import Drivers from "./page/Drivers";
import History from "./page/History";
import Schedule from "./page/Schedule";
import Trips from "./page/Trips";

//Layout
import AppLayout from "./layout/AppLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "*",
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
