import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/LayoutAdmin";
// import Dashboard from '../modulos/dashboard/index';
import ErrorPage from "../page/ErrorPage";
import Hoteles from "../page/hoteles";
import ChooseRom from "../page/chooseRom";
import Flights from "../page/flights";
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
      path: "/admin",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        // {
        //   path: 'dashboard',
        //   element: <Dashboard />,
        // },
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
