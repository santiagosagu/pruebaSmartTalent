/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Form, Input, Select, Table, Button, Alert } from "antd";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useMutationServices } from "../../api/services/useUpdateDocument";
import ColumnsTableNewHotel from "./components/ColumnsTableNewHotel";
import {
  HabitacionDataInputs,
  HotelDataInputs,
} from "../../interfaces/newHotel";

const NewHotel = () => {
  const [hotelDataInputs, setHotelDataInputs] = useState<HotelDataInputs>({
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

  const id = nanoid();

  const columns = ColumnsTableNewHotel();

  const {
    mutate: addHotel,
    // isError,
    // isSuccess,
  } = useMutationServices({
    type: "add",
    collectionName: "hoteles",
  });

  const handleOnchageDataHotel = (e: any) => {
    setHotelDataInputs({ ...hotelDataInputs, [e.target.name]: e.target.value });
  };

  const handleOnchageDataHabitacion = (e: any) => {
    setHabitacionDataInputs({
      ...habitacionDataInputs,
      [e.target.name]: e.target.value,
    });
  };

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
      setHotelDataInputs({
        ...hotelDataInputs,

        habitaciones: [
          ...hotelDataInputs.habitaciones,
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
    } else {
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
      return setHotelDataInputs({
        nombre: "",
        image: "",
        ciudad: "",
        valor: "",
        habitaciones: [],
        disponible: true,
      });
    }

    if (hotelDataInputs.habitaciones.length === 0) {
      return setErrorHotel("Ingresa por lo menos una habitacion");
    }

    setErrorHotel("Por favor completa todos los campos del hotel");
  };

  return (
    <div className="mt-8 w-full pl-2">
      <div>
        <Typography className="text-xl font-bold mb-10">Nuevo Hotel</Typography>

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
      <Typography className="text-xl font-bold my-10">
        Añadir Habitacion
      </Typography>
      {errorHabitacion && (
        <Alert
          message="Por favor completa todos los campos"
          type="error"
          className="mb-3"
        />
      )}
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
      </Form>
      <div className="flex justify-between md:px-6 my-4">
        <Button type="primary" onClick={addHabitacion}>
          Agregar Habitacion
        </Button>
        <Button
          className="bg-slate-400 text-white"
          type="primary"
          onClick={handleAddHotel}
        >
          Agregar Hotel
        </Button>
      </div>
      <Table
        dataSource={hotelDataInputs.habitaciones}
        columns={columns}
        rowKey="id"
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default NewHotel;
