/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Form, Input, Select, Table, Button, Alert } from "antd";
// import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useMutationServices } from "../../api/services/useUpdateDocument";
import { useNavigate, useParams } from "react-router-dom";
import useGetDocumentById from "../../api/services/useGetDocumentById";
import { useRoomEdit } from "../../zustand/store";
import ColumnsTableRoomsEdit from "./components/ColumnsTableRoomsEdit";
import { useQueryClient } from "@tanstack/react-query";
import { HabitacionDataInputs } from "../../interfaces/newHotel";

const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { roomEdit, removeRoomEdit } = useRoomEdit();

  const columns = ColumnsTableRoomsEdit();

  const { data: dataHotelEdit } = useGetDocumentById({
    key: "hotelEdit",
    collectionName: "hoteles",
    docId: id,
  });

  const [hotelDataInputs, setHotelDataInputs] = useState<any>({
    nombre: "",
    image: "",
    ciudad: "",
    valor: "",
    habitaciones: [],
    disponible: true,
  });

  const [habitacionDataInputs, setHabitacionDataInputs] =
    useState<HabitacionDataInputs>({
      nombre: "",
      image: "",
      capacidad: "",
      tipoHabitacion: "sencilla",
      costoBase: "",
      impuesto: "",
      ubicacion: "",
      desayuno: true,
      parqueadero: true,
      disponible: true,
      ocupada: [],
    });

  const [errorHotel, setErrorHotel] = useState("");
  const [errorHabitacion, setErrorHabitacion] = useState(false);

  const {
    mutate: addHotel,
    // isError,
    isSuccess,
  } = useMutationServices({
    type: "update",
    collectionName: "hoteles",
    docId: id,
  });

  useEffect(() => {
    if (dataHotelEdit) {
      setHotelDataInputs(dataHotelEdit);
    }
  }, [dataHotelEdit]);

  useEffect(() => {
    if (hotelDataInputs.habitaciones.length > 0 && roomEdit) {
      const roomActive = hotelDataInputs.habitaciones.filter(
        (roomHotel: any) => roomHotel.id === roomEdit
      );

      setHabitacionDataInputs(roomActive[0]);
    }
  }, [hotelDataInputs.habitaciones, roomEdit]);

  const handleOnchageDataHotel = (e: any) => {
    setHotelDataInputs({ ...hotelDataInputs, [e.target.name]: e.target.value });
  };

  const handleOnchageDataHabitacion = (e: any) => {
    setHabitacionDataInputs({
      ...habitacionDataInputs,
      [e.target.name]: e.target.value,
    });
  };

  console.log(habitacionDataInputs, "habitacion");

  const addHabitacion = () => {
    if (
      habitacionDataInputs.nombre &&
      habitacionDataInputs.image &&
      habitacionDataInputs.capacidad &&
      habitacionDataInputs.ubicacion &&
      habitacionDataInputs.costoBase &&
      habitacionDataInputs.impuesto
    ) {
      const valorImpuesto =
        (Number(habitacionDataInputs.costoBase) *
          Number(habitacionDataInputs.impuesto)) %
        100;
      const valor =
        Number(valorImpuesto) + Number(habitacionDataInputs.costoBase);

      const otherData = hotelDataInputs.habitaciones.filter(
        (habitacion: any) => habitacion.id !== roomEdit
      );

      setHotelDataInputs({
        ...hotelDataInputs,

        habitaciones: [
          ...otherData,
          {
            id,
            valor,
            ...habitacionDataInputs,
          },
        ],
      });
      setHabitacionDataInputs({
        nombre: "",
        image: "",
        capacidad: "",
        tipoHabitacion: "sencilla",
        costoBase: "",
        impuesto: "",
        ubicacion: "",
        desayuno: true,
        parqueadero: true,
        disponible: true,
        ocupada: [],
      });

      removeRoomEdit();
    } else {
      console.log(habitacionDataInputs);
      setErrorHabitacion(true);
    }
  };

  const handleAddHotel = () => {
    if (
      hotelDataInputs.nombre &&
      hotelDataInputs.image &&
      hotelDataInputs.ciudad &&
      hotelDataInputs.valor &&
      hotelDataInputs.habitaciones.length > 0
    ) {
      addHotel(hotelDataInputs);
      navigate("/admin/dashboard");
      if (isSuccess) {
        queryClient.invalidateQueries({
          queryKey: ["hotelesActivos"],
        });
        queryClient.invalidateQueries({
          queryKey: ["hotelesInactivos"],
        });
      }
    }

    if (hotelDataInputs.habitaciones.length === 0) {
      return setErrorHotel("Ingresa por lo menos una habitacion");
    }

    setErrorHotel("Por favor completa todos los campos del hotel");
  };

  return (
    <div className="mt-8 w-full pl-2">
      <div>
        <Typography className="text-xl font-bold mb-10">
          Editar Hotel
        </Typography>

        {errorHotel && (
          <Alert message={errorHotel} type="error" className="mb-3" />
        )}

        <Form className="px-4 max-w-[600px]">
          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Nombre:
            <div className="md:w-3/4">
              <Input
                required
                name="nombre"
                value={hotelDataInputs.nombre}
                onChange={handleOnchageDataHotel}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Url Imagen:
            <div className="md:w-3/4">
              <Input
                required
                name="image"
                value={hotelDataInputs.image}
                onChange={handleOnchageDataHotel}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Ciudad:
            <div className="md:w-3/4">
              <Input
                required
                name="ciudad"
                value={hotelDataInputs.ciudad}
                onChange={handleOnchageDataHotel}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Valor:
            <div className="md:w-3/4">
              <Input
                type="number"
                required
                name="valor"
                value={hotelDataInputs.valor}
                onChange={handleOnchageDataHotel}
              />
            </div>
          </label>
        </Form>
      </div>
      <Typography className="text-xl font-bold mt-10">
        Editar Habitacion
      </Typography>
      <Typography className="text-base font-semibold mb-10">
        Por favor selecciona una habitacion de la tabla para editar
      </Typography>
      {errorHabitacion && (
        <Alert
          message="Por favor completa todos los campos"
          type="error"
          className="mb-3"
        />
      )}
      {roomEdit && (
        <Form className="px-4 max-w-[600px]">
          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Nombre:
            <div className="md:w-3/4">
              <Input
                required
                name="nombre"
                value={habitacionDataInputs.nombre}
                onChange={handleOnchageDataHabitacion}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Url Image:
            <div className="md:w-3/4">
              <Input
                name="image"
                value={habitacionDataInputs.image}
                onChange={handleOnchageDataHabitacion}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Capacidad:
            <div className="md:w-3/4">
              <Input
                type="number"
                name="capacidad"
                value={habitacionDataInputs.capacidad}
                onChange={handleOnchageDataHabitacion}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Tipo Habitacion:
            <div className="w-3/4">
              <Select
                style={{ width: 120 }}
                options={[
                  { value: "sencilla", label: "Sencilla" },
                  { value: "premium", label: "Premium" },
                ]}
                value={habitacionDataInputs.tipoHabitacion}
                onChange={(value) =>
                  setHabitacionDataInputs({
                    ...habitacionDataInputs,
                    tipoHabitacion: value,
                  })
                }
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Ubicacion:
            <div className="md:w-3/4">
              <Input
                required
                name="ubicacion"
                placeholder="Bloque 2 piso 15 apt 1506"
                value={habitacionDataInputs.ubicacion}
                onChange={handleOnchageDataHabitacion}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Costo Base:
            <div className="md:w-3/4">
              <Input
                type="number"
                required
                name="costoBase"
                value={habitacionDataInputs.costoBase}
                onChange={handleOnchageDataHabitacion}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            % Impuesto:
            <div className="md:w-3/4">
              <Input
                type="number"
                required
                name="impuesto"
                value={habitacionDataInputs.impuesto}
                onChange={handleOnchageDataHabitacion}
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Desayuno incluido
            <div className="w-3/4">
              <Select
                style={{ width: 120 }}
                options={[
                  { value: true, label: "Si" },
                  { value: false, label: "No" },
                ]}
                value={habitacionDataInputs.desayuno}
                onChange={(value) =>
                  setHabitacionDataInputs({
                    ...habitacionDataInputs,
                    desayuno: value,
                  })
                }
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-start gap-3 mb-4">
            Parqueadero Gratis
            <div className="">
              <Select
                style={{ width: 120 }}
                options={[
                  { value: true, label: "Si" },
                  { value: false, label: "No" },
                ]}
                value={habitacionDataInputs.parqueadero}
                onChange={(value) =>
                  setHabitacionDataInputs({
                    ...habitacionDataInputs,
                    parqueadero: value,
                  })
                }
              />
            </div>
          </label>

          <label className="lg:mr-4 md:w-[400px] md:flex justify-between gap-3 mb-4">
            Habitacion Disponible
            <div className="w-3/4">
              <Select
                style={{ width: 120 }}
                options={[
                  { value: true, label: "Si" },
                  { value: false, label: "No" },
                ]}
                value={habitacionDataInputs.disponible}
                onChange={(value) =>
                  setHabitacionDataInputs({
                    ...habitacionDataInputs,
                    disponible: value,
                  })
                }
              />
            </div>
          </label>
          <Button type="primary" onClick={addHabitacion}>
            Editar Habitacion
          </Button>
        </Form>
      )}
      <div className="flex justify-end md:px-6 my-4">
        <Button
          className="bg-slate-400 text-white"
          type="primary"
          onClick={handleAddHotel}
        >
          Editar Hotel
        </Button>
      </div>
      <Table
        rowKey="id"
        dataSource={hotelDataInputs.habitaciones}
        columns={columns}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default EditHotel;
