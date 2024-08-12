import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { INavigationList } from "../Sidebar";

export const navigationList: INavigationList[] = [
  {
    name: "dashboard",
    path: "dashboard",
    icon: <DashboardIcon />,
    childrens: [],
  },
  {
    name: "Nuevo Hotel",
    path: "nuevo-hotel",
    icon: <PeopleIcon fontSize="medium" />,
    childrens: [],
  },
];
