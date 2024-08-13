/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Popover } from "antd";
import { Link } from "react-router-dom";
import ConfirmationStatus from "./ConfirmationStatus";
import { useState } from "react";

const ColumnsTableStatatusHotel = () => {
  const [openConfirmationStatus, setopenConfirmationStatus] = useState({
    status: true,
    id: "",
  });

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
      key: "name",
    },
    {
      title: "Ciudad",
      dataIndex: "ciudad",
      key: "lugar",
    },
    {
      title: "Cantidad Habitaciones",
      dataIndex: "habitaciones",
      key: "habitaciones",
      render: (habitaciones: any) => (
        <Typography>{habitaciones.length}</Typography>
      ),
    },
    {
      title: "Habitaciones Activas",
      dataIndex: "habitaciones",
      key: "habitacionesActivas",
      render: (habitaciones: any) => {
        const habitacionesActivas = habitaciones.filter(
          (item: any) => item.disponible
        );
        return (
          <Typography key={habitacionesActivas.id}>
            {habitacionesActivas.length}
          </Typography>
        );
      },
    },
    {
      title: "Habitaciones Inactivas",
      dataIndex: "habitaciones",
      key: "habitacionesInactivas",
      render: (habitaciones: any) => {
        const habitacionesActivas = habitaciones.filter(
          (item: any) => !item.disponible
        );
        return (
          <Typography key={habitacionesActivas.id}>
            {habitacionesActivas.length}
          </Typography>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_value: any, item: any) => {
        return (
          <div>
            <Link to={`/admin/editar-hotel/${item.id}`}>
              <Typography>Editar</Typography>
            </Link>
            <Popover
              open={
                openConfirmationStatus.status &&
                openConfirmationStatus.id === item.id
                  ? true
                  : false
              }
              content={
                <ConfirmationStatus
                  status={item.disponible}
                  id={item.id}
                  handleOpen={setopenConfirmationStatus}
                />
              }
            >
              <Typography
                className="cursor-pointer mt-3"
                onClick={() =>
                  setopenConfirmationStatus({
                    status: !openConfirmationStatus.status,
                    id: item.id,
                  })
                }
              >
                estado
              </Typography>
            </Popover>
          </div>
        );
      },
    },
  ];

  return columns;
};

export default ColumnsTableStatatusHotel;
