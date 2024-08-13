/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Typography } from "antd";
import useGetServices from "../../api/services/useGetServices";
import { CircularProgress } from "@mui/material";
import ColumnsTableStatatusHotel from "./components/ColumnsTableStatatusHotel";
import { useState } from "react";

const columnsTest: any = [
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
  { title: "Nombre", dataIndex: "nombre", key: "name" },
  { title: "valor", dataIndex: "valor", key: "valor" },
  {
    title: "Status",
    dataIndex: "disponible",
    key: "disponible",
    render: (status: boolean) => (
      <Typography>{status ? "Disponible" : "No Disponible"}</Typography>
    ),
  },
];

const Dashboard = () => {
  const columns = ColumnsTableStatatusHotel();
  const [expandedRowKeys, setExpandedRowKeys] = useState<any>([]);

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

  const onExpand = (
    expanded: any,
    record: {
      id: any;
      key: any;
    }
  ) => {
    const keys = expanded ? [record.id] : [];

    setExpandedRowKeys(keys);
  };

  return (
    <div className="mt-8">
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
            rowKey="id"
            expandable={{
              expandedRowKeys: expandedRowKeys,
              onExpand: onExpand,
              expandedRowRender: (record) => (
                <div className="bg-[#f4f1f1] p-4 rounded-lg">
                  <Typography className="font-semibold text-lg mb-2">
                    Habitaciones
                  </Typography>
                  <Table
                    rowKey="id"
                    dataSource={record.habitaciones}
                    columns={columnsTest}
                    pagination={false}
                  />
                </div>
              ),
            }}
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
          rowKey="id"
          expandable={{
            expandedRowKeys: expandedRowKeys,
            onExpand: onExpand,
            expandedRowRender: (record) => (
              <div className="bg-[#f4f1f1] p-4 rounded-lg">
                <Typography className="font-semibold text-lg mb-2">
                  Habitaciones
                </Typography>
                <Table
                  rowKey="id"
                  dataSource={record.habitaciones}
                  columns={columnsTest}
                  pagination={false}
                />
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
