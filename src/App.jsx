import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

//StateModal
import { ModalStoreState } from "./context/ModalStoreState";
import ModalMain from "./components/ModalMain";

function App() {
  const { isOpen, modalComponent } = ModalStoreState();
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
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* Modal Show Logic */}
      {isOpen && <ModalMain>{modalComponent}</ModalMain>}
      {/* Router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
