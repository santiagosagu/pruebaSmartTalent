/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Typography } from "antd";
import useGetServices from "../../api/services/useGetServices";
import { CircularProgress } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useMutationServices } from "../../api/services/useUpdateDocument";

const Dashboard = () => {
  const queryClient = useQueryClient();

  const { data: dataHotelesActivos, isLoading: isLoadingHotelesActivos } =
    useGetServices({
      key: "hotelesActivos",
      collectionName: "hoteles",
      filters: [["disponible", "==", true]],
    });

  const { data: dataHotelesInactivos, isLoading: isLoadingHotelesInactivos } =
    useGetServices({
      key: "hotelesInactivos",
      collectionName: "hoteles",
      filters: [["disponible", "==", false]],
    });

  const {
    mutate: updateHotel,
    isError,
    isSuccess,
  } = useMutationServices({
    type: "update",
    collectionName: "hoteles",
    docId: "3DTDjSWV271RPyRqLAx8",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const updates = {
      disponible: false,
    };

    updateHotel(updates);
  };

  if (isSuccess) {
    queryClient.invalidateQueries({
      queryKey: ["hotelesActivos"],
    });
    queryClient.invalidateQueries({
      queryKey: ["hotelesInactivos"],
    });
  }

  if (isError) {
    console.log(isError);
  }

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
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Lugar",
      dataIndex: "lugar",
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
        return <Typography>{habitacionesActivas.length}</Typography>;
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
        return <Typography>{habitacionesActivas.length}</Typography>;
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div>
          <Typography>Editar</Typography>
          <Typography>estado</Typography>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8 ">
      <div>
        <Typography className="font-semibold text-xl">
          Hoteles Activos
        </Typography>
        {isLoadingHotelesActivos && <CircularProgress />}
        {dataHotelesActivos && (
          <Table
            dataSource={dataHotelesActivos}
            columns={columns}
            scroll={{ x: 1000 }}
          />
        )}
      </div>

      <div className="mt-24">
        <Typography className="font-semibold text-xl">
          Hoteles Inactivos
        </Typography>
        {isLoadingHotelesInactivos && <CircularProgress />}
        <Table
          dataSource={dataHotelesInactivos}
          columns={columns}
          scroll={{ x: 1000 }}
        />
      </div>
      <button onClick={handleSubmit}>dame click</button>
    </div>
  );
};

export default Dashboard;
