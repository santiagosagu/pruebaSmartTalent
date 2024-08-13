/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircularProgress } from "@mui/material";
import useGetServices from "../../api/services/useGetServices";
import { Table, Typography } from "antd";
import ColumnsTableViewReserva from "./components/ColumnTableViewReservas";
import ColumnDataPeople from "./components/ColumnDataPeople";
import { useEffect, useState } from "react";

const Recervation = () => {
  const [DataReservation, setDataReservation] = useState<any>([]);
  const columns = ColumnsTableViewReserva();
  const columnsPeople = ColumnDataPeople();
  const [expandedRowKeysReservas, setExpandedRowKeysReservas] = useState<any>(
    []
  );

  const { data, isLoading } = useGetServices({
    key: "reservas",
    collectionName: "reservas",
  });

  useEffect(() => {
    if (data) {
      setDataReservation(data);
    }
  }, [data]);

  const onExpand = (expanded: any, record: { id: any }) => {
    const keys = expanded ? [record.id] : [];

    setExpandedRowKeysReservas(keys);
  };

  return (
    <div className="mt-8 w-full pl-2">
      <div>
        {isLoading && <CircularProgress />}
        {DataReservation.length > 0 && (
          <Table
            dataSource={DataReservation || []}
            columns={columns}
            scroll={{ x: 1000 }}
            rowKey="id"
            expandable={{
              expandedRowKeys: expandedRowKeysReservas,
              onExpand: onExpand,
              expandedRowRender: (record) => (
                <div className="bg-[#f4f1f1] p-4 rounded-lg">
                  <Typography className="font-semibold text-lg mb-2">
                    Huespedes
                  </Typography>
                  <Table
                    rowKey="id"
                    dataSource={record.people}
                    columns={columnsPeople}
                    pagination={false}
                  />
                </div>
              ),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Recervation;
