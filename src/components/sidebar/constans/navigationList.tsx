import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArticleIcon from '@mui/icons-material/Article';
import BallotIcon from '@mui/icons-material/Ballot';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import DnsIcon from '@mui/icons-material/Dns';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import { INavigationList } from '../Sidebar';

export const navigationList: INavigationList[] = [
  {
    name: 'dashboard',
    path: 'dashboard',
    icon: <DashboardIcon />,
    childrens: [],
  },
  {
    name: 'Usuarios',
    path: 'usuarios',
    icon: <PeopleIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Materiales',
    path: 'materiales',
    icon: <CategoryIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Servicios',
    path: 'servicios',
    icon: <HomeRepairServiceIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Proveedores',
    path: 'proveedores',
    icon: <AssignmentIndIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Lista Precios',
    path: 'lista-precios',
    icon: <RequestQuoteIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Requerimientos (RQ)',
    path: 'requerimientos',
    icon: <AssignmentIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Cotizaciones',
    path: 'cotizaciones',
    icon: <ArticleIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Órdenes de Compra (OC)',
    path: 'ordenes-compra',
    icon: <BallotIcon fontSize='medium' />,
    childrens: [],
  },
  {
    name: 'Configuraciones',
    path: 'configuraciones',
    icon: <SettingsSuggestIcon fontSize='medium' />,
    childrens: [
      {
        name: 'Países',
        path: 'paises',
        icon: <WidthNormalIcon fontSize='medium' />,
      },
      {
        name: 'Departamentos',
        path: 'departamentos',
        icon: <AccountBalanceIcon fontSize='medium' />,
      },
      {
        name: 'Ciudades',
        path: 'ciudades',
        icon: <LocationCityIcon fontSize='medium' />,
      },
      {
        name: 'Unidades Operativas',
        path: 'unidades-operativas',
        icon: <AccountTreeIcon fontSize='medium' />,
      },
      {
        name: 'Centros de Operativos',
        path: 'centros-operativos',
        icon: <BusinessCenterIcon fontSize='medium' />,
      },
      {
        name: 'Centros de Costo',
        path: 'centros-costo',
        icon: <ContentPasteGoIcon fontSize='medium' />,
      },
      {
        name: 'Categorías Materiales',
        path: 'categorias-materiales',
        icon: <DnsIcon fontSize='medium' />,
      },
      {
        name: 'Bodegas',
        path: 'bodegas',
        icon: <HolidayVillageIcon fontSize='medium' />,
      },
      {
        name: 'Estados de Requerimiento',
        path: 'estados-requerimiento',
        icon: <LibraryAddCheckIcon fontSize='medium' />,
      },
      {
        name: 'Prioridades Requerimiento',
        path: 'prioridades-requerimientos',
        icon: <ListAltIcon fontSize='medium' />,
      },
      {
        name: 'Tipos de Movimientos',
        path: 'tipos-movimientos',
        icon: <LowPriorityIcon fontSize='medium' />,
      },
    ],
  },
];
