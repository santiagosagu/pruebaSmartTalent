import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layoutAdmin/LayoutAdmin";
import ErrorPage from "../page/ErrorPage";
import Hoteles from "../page/hoteles";
import ChooseRom from "../page/chooseRom";
import Flights from "../page/flights";
import Login from "../page/login/Login";
import Dashboard from "../modules/dashboard";
import NewHotel from "../modules/newHotel";
import EditHotel from "../modules/editHotel";
import Recervation from "../modules/reservation";

const useRouterApp = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Flights />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/hoteles",
      element: <Hoteles />,
      errorElement: <ErrorPage />,
    },
    {
      path: "habitaciones/:id",
      element: <ChooseRom />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login-admin",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "nuevo-hotel",
          element: <NewHotel />,
        },
        {
          path: "editar-hotel/:id",
          element: <EditHotel />,
        },
        {
          path: "reservas",
          element: <Recervation />,
        },
      ],
    },
  ]);

  return router;
};

export default useRouterApp;
