import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
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
  {
    name: "Reservas",
    path: "reservas",
    icon: <AssignmentIndIcon fontSize="medium" />,
    childrens: [],
  },
];
