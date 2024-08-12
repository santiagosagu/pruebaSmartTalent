/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Form, Input, Select, Table, Button } from "antd";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useMutationServices } from "../../api/services/useUpdateDocument";

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
];

const NewHotel = () => {
  const [hotelDataInputs, setHotelDataInputs] = useState<any>({
    nombre: "",
    image: "",
    ciudad: "",
    valor: "",
    habitaciones: [],
    disponible: true,
  });

  const [habitacionDataInputs, setHabitacionDataInputs] = useState({
    nombre: "",
    image: "",
    capacidad: "",
    desayuno: true,
    parqueadero: true,
    disponible: true,
  });

  console.log(hotelDataInputs);

  const id = nanoid();

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
    setHotelDataInputs({
      ...hotelDataInputs,

      habitaciones: [
        ...hotelDataInputs.habitaciones,
        {
          id,
          ...habitacionDataInputs,
        },
      ],
    });
    setHabitacionDataInputs({
      nombre: "",
      image: "",
      capacidad: "",
      desayuno: true,
      parqueadero: true,
      disponible: true,
    });
  };

  const handleAddHotel = () => {
    addHotel(hotelDataInputs);
  };

  return (
    <div className="mt-8 w-full pl-2">
      <div>
        <Typography className="text-xl font-bold mb-10">Nuevo Hotel</Typography>
        <Form className="px-4 max-w-[600px]">
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input name="nombre" onChange={handleOnchageDataHotel} />
          </Form.Item>
          <Form.Item
            label="Url Image"
            name="image"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input name="image" onChange={handleOnchageDataHotel} />
          </Form.Item>
          <Form.Item
            label="Ciudad"
            name="ciudad"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input name="ciudad" onChange={handleOnchageDataHotel} />
          </Form.Item>
          <Form.Item
            label="Valor"
            name="valor"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input name="valor" onChange={handleOnchageDataHotel} />
          </Form.Item>
        </Form>
      </div>
      <Typography className="text-xl font-bold mb-10">
        Añadir Habitacion
      </Typography>
      <Form className="px-4 max-w-[600px]">
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input name="nombre" onChange={handleOnchageDataHabitacion} />
        </Form.Item>
        <Form.Item
          label="Url Image"
          name="image"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input name="image" onChange={handleOnchageDataHabitacion} />
        </Form.Item>
        <Form.Item
          label="Capacidad"
          name="capacidad"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input name="capacidad" onChange={handleOnchageDataHabitacion} />
        </Form.Item>
        <Form.Item
          label="Desayuno Incluido"
          name="desayuno"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: true, label: "Si" },
              { value: false, label: "No" },
            ]}
            onChange={(value) =>
              setHabitacionDataInputs({
                ...habitacionDataInputs,
                desayuno: value,
              })
            }
          />
        </Form.Item>
        <Form.Item
          label="Parqueadero Gratis"
          name="parquedero gratis"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: true, label: "Si" },
              { value: false, label: "No" },
            ]}
            onChange={(value) =>
              setHabitacionDataInputs({
                ...habitacionDataInputs,
                parqueadero: value,
              })
            }
          />
        </Form.Item>
        <Form.Item
          label="Habitacion Disponible"
          name="habitacion disponible"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            style={{ width: 120 }}
            options={[
              { value: true, label: "Si" },
              { value: false, label: "No" },
            ]}
            onChange={(value) =>
              setHabitacionDataInputs({
                ...habitacionDataInputs,
                disponible: value,
              })
            }
          />
        </Form.Item>
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
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default NewHotel;
