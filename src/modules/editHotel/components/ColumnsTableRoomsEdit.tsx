/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "antd";
import { useRoomEdit } from "../../../zustand/store";

const ColumnsTableRoomsEdit = () => {
  const { updateRoomEdit } = useRoomEdit();

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
      title: "Capacidad",
      dataIndex: "capacidad",
      key: "capacidad",
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
      title: "Habitacion Disponible",
      dataIndex: "disponible",
      key: "disponible",
      render: (disponible: string) => (
        <Typography>{disponible ? "Si" : "No"}</Typography>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_value: any, item: any) => {
        const handleSelectRoom = () => {
          updateRoomEdit(item.id);
        };

        return (
          <div>
            <Typography onClick={handleSelectRoom} className="cursor-pointer">
              Editar
            </Typography>
          </div>
        );
      },
    },
  ];

  return columns;
};

export default ColumnsTableRoomsEdit;
