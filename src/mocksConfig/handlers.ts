import { http } from "msw";
import { paquetesMasVendidos } from "../page/flights/mocks/paquetesMasVendidos";
import { hoteles } from "../page/hoteles/mocks/hoteles";
import { singleHotel } from "../page/chooseRom/mocks/singleHotel";

export const handlers = [
  http.get(
    `${import.meta.env.VITE_BACKEND_URL}/paquetes-mas-vendidos`,
    paquetesMasVendidos
  ),
  http.get(`${import.meta.env.VITE_BACKEND_URL}/hoteles`, hoteles),
  http.get(`${import.meta.env.VITE_BACKEND_URL}/hoteles/1`, singleHotel),
];
