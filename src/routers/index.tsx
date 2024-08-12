import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layoutAdmin/LayoutAdmin";
import ErrorPage from "../page/ErrorPage";
import Hoteles from "../page/hoteles";
import ChooseRom from "../page/chooseRom";
import Flights from "../page/flights";
import Login from "../page/login/Login";
import Dashboard from "../modules/dashboard";
import TestFirebase from "../modules/TestFirebase";
import NewHotel from "../modules/newHotel";
// import Users from '../modulos/users';
// import { CountriesModule } from '../modulos/countries';
// import { MaterialsModule } from '../modulos/materials';

const useRouterApp = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Flights />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/hoteles",
      element: <Hoteles />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/habitaciones/:id",
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
          path: "testfirebase",
          element: <TestFirebase />,
        },
        {
          path: "nuevo-hotel",
          element: <NewHotel />,
        },
        // {
        //   path: '/usuarios',
        //   element: <Users />,
        // },
        // {
        //   path: '/paises',
        //   element: <CountriesModule />,
        // },
        // {
        //   path: '/materiales',
        //   element: <MaterialsModule />,
        // },
      ],
    },
  ]);

  return router;
};

export default useRouterApp;
