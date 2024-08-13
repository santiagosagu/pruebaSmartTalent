/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "antd";
import {
  IRoomGetReservation,
  IRoomReservation,
} from "../../../interfaces/hoteles";

const ColumnsTableViewReserva = () => {
  const columns = [
    {
      title: "Imagen",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <img
          src={image}
          alt=""
          className="w-[119px] h-[119px] lg:h-full object-cover rounded-lg"
        />
      ),
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Tipo",
      dataIndex: "tipoHabitacion",
      key: "tipoHabitacion",
    },
    {
      title: "Ubicacion",
      dataIndex: "ubicacion",
      key: "ubicacion",
    },
    {
      title: "Capacidad",
      dataIndex: "capacidad",
      key: "capacidad",
    },
    {
      title: "Fecha Reserva",
      dataIndex: "fechaReserva",
      key: "fechaReserva",
      render: (_item: any, room: IRoomGetReservation) => (
        <div>
          <Typography>{room.fechaReserva.inicio}</Typography>
          <Typography>{room.fechaReserva.fin}</Typography>
        </div>
      ),
    },
    {
      title: "Desayuno incluido",
      dataIndex: "desayuno",
      key: "desayuno",
      render: (desayuno: string) => (
        <Typography>{desayuno ? "Si" : "No"}</Typography>
      ),
    },
    {
      title: "Parqueadero Gratis",
      dataIndex: "parqueadero",
      key: "parqueadero",
      render: (parqueadero: string) => (
        <Typography>{parqueadero ? "Si" : "No"}</Typography>
      ),
    },
    {
      title: "Nombre Hotel",
      dataIndex: "nombreHotel",
      key: "disponible",
      render: (_item: any, room: IRoomReservation) => (
        <Typography>{room.hotel.nombre}</Typography>
      ),
    },
    {
      title: "# Emergencia",
      dataIndex: "numeroEmergencia",
      key: "numeroEmergencia",
    },
  ];

  return columns;
};

export default ColumnsTableViewReserva;
