/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Input, Typography } from "antd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FlatwareIcon from "@mui/icons-material/Flatware";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import FormReservation from "../../chooseRom/components/FormReservation";
import Header from "../../../components/header";
import { useMutationServices } from "../../../api/services/useUpdateDocument";
import { IRoomReservation } from "../../../interfaces/hoteles";
import { Iperson } from "../../../interfaces/chooseRom";

const SearchRoom = ({ dataSearch }: any) => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [people, setPeople] = useState<Iperson[]>([]);
  const [rangoFechas, setRangoFechas] = useState<any>([]);
  const [fechaInicioState, setFechaInicio] = useState<any>(null);
  const [fechaFinState, setFechaFin] = useState<any>(null);
  const [idHotel, setIdHotel] = useState("");

  const { RangePicker } = DatePicker;

  const [open, setOpen] = useState({
    status: false,
    index: 0,
  });

  const { mutate: addHotel } = useMutationServices({
    type: "update",
    collectionName: "hoteles",
    docId: idHotel,
  });

  const { mutate: addReserva } = useMutationServices({
    type: "add",
    collectionName: "reservas",
  });

  const handleOpenForm = (index: number, id: string) => {
    setOpen({ status: !open.status, index });
    setPeople([]);
    setNumberOfPeople(0);
    setIdHotel(id);
  };

  const handlePeopleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    max: number
  ) => {
    const count = parseInt(e.target.value, 10);
    setNumberOfPeople(count);
    if (e.target.value.length === 0) {
      setPeople([]);
    } else if (Number(e.target.value) > max) {
      setPeople([]);
      return;
    } else {
      setPeople(
        Array(count).fill({
          nombres: "",
          apellidos: "",
          fechaNacimiento: "",
          genero: "",
          tipoDocumento: "",
          numeroDocumento: "",
          email: "",
          telefono: "",
        })
      );
    }
  };

  const handlePersonChange = (
    index: number,
    field: keyof Iperson,
    value: string
  ) => {
    const updatedPeople = [...people];
    updatedPeople[index] = { ...updatedPeople[index], [field]: value };
    setPeople(updatedPeople);
  };

  const handleReservation = (item: IRoomReservation) => {
    const [fechaInicio, fechaFin] = rangoFechas;
    const formato = "YYYY-MM-DD"; // Cambia el formato según tus necesidades
    if (rangoFechas.length !== 2) {
      alert("por favor seleccione la fecha");
      return;
    }
    const fechaInicioFormateada = fechaInicio.format(formato);
    const fechaFinFormateada = fechaFin.format(formato);

    const {
      nombre,
      image,
      capacidad,
      tipoHabitacion,
      costoBase,
      impuesto,
      ubicacion,
      desayuno,
      parqueadero,
      disponible,
      id,
      valor,
    } = item;

    const habitacionActualizada = {
      nombre,
      image,
      capacidad,
      tipoHabitacion,
      costoBase,
      impuesto,
      ubicacion,
      desayuno,
      parqueadero,
      disponible,
      id,
      valor,
      ocupada: [
        ...item.ocupada,
        rangoFechas.length === 2
          ? { inicio: fechaInicioFormateada, fin: fechaFinFormateada }
          : { inicio: fechaInicioState, fin: fechaFinState },
      ],
    };

    const {
      habitaciones,
      id: idHotel,
      ciudad,
      disponible: disponibleHotel,
      image: imageHotel,
      nombre: nombreHotel,
      valor: valorHotel,
    } = item.hotel;

    const othersRooms = habitaciones.filter((room: any) => room.id !== item.id);

    const newHabitaciones = [...othersRooms, habitacionActualizada];

    addHotel({ habitaciones: newHabitaciones });
    addReserva({
      nombre,
      image,
      capacidad,
      tipoHabitacion,
      costoBase,
      impuesto,
      ubicacion,
      desayuno,
      parqueadero,
      disponible,
      idHabitacion: id,
      valor,
      hotel: {
        id: idHotel,
        ciudad,
        disponible: disponibleHotel,
        image: imageHotel,
        nombre: nombreHotel,
        valor: valorHotel,
      },
      fechaReserva: {
        inicio: fechaInicioFormateada,
        fin: fechaFinFormateada,
      },
      people,
    });

    setPeople([]);
    setRangoFechas([]);
    setNumberOfPeople(0);
    setOpen({
      status: false,
      index: 0,
    });
  };

  return (
    <div className="min-h-screen justify-center w-full lg:min-w-[1355px] bg-[#f4f1f1] px-2 ">
      <Header />
      <div className="w-full pt-24 lg:pt-32  lg:flex lg:justify-center flex-col lg:items-center">
        <div className="flex flex-col items-center w-full">
          <div className="rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiYL6dU4jZ0qbEUPFuca6AcyAuaGOwN1hLQ&s"
              alt=""
              className="object-bottom rounded-lg"
            />
          </div>
          <Typography className="text-3xl font-semibold uppercase mt-2 text-center mb-5">
            Habitaciones disponibles
          </Typography>
        </div>
        <div>
          {dataSearch && (
            <div>
              {dataSearch.map((item: IRoomReservation, index: number) => (
                <div
                  className="mb-4 card-shadom bg-white rounded-lg"
                  key={index}
                >
                  <div className="md:flex border rounded-t-lg">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full md:w-[200px] h-[250px] md:h-[200px] mb-3 lg:mb-0"
                    />
                    <div className="flex flex-col justify-evenly px-3">
                      <div className="">
                        <Typography className="text-center font-semibold text-xl">
                          {item.hotel.nombre}
                        </Typography>
                      </div>
                      <div className="lg:ml-20 md:mt-4 lg:mt-0 lg:flex gap-3 justify-evenly w-full items-center">
                        <Typography className="text-base px-3 lg:px-0">
                          <PeopleAltIcon className="mr-1" />
                          capacidad {item.capacidad}
                        </Typography>
                        <Typography className="text-base px-3 lg:px-0">
                          <FlatwareIcon />{" "}
                          {item.desayuno
                            ? "Desayuno incluido"
                            : "Desayuno no incluido"}
                        </Typography>
                        <Typography className="text-base px-3 lg:px-0">
                          <DirectionsCarIcon />{" "}
                          {item.parqueadero
                            ? "Estacionamiento gratis"
                            : "Estacionamiento no incluido"}
                        </Typography>
                        <div className="p-3 bg-orange-100 rounded-lg mt-4 lg:mt-0">
                          <Typography className="text-xl">
                            <AttachMoneyIcon /> {item.valor}
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-end p-2 lg:w-44"
                      onClick={() => handleOpenForm(index, item.hotel.id)}
                    >
                      <Typography className="text-end cursor-pointer">
                        Reservar <ArrowDropDownIcon />
                      </Typography>
                    </div>
                  </div>

                  <div>
                    {open.status && open.index === index && (
                      <div className="border rounded-b-lg p-7">
                        <div>
                          <div className="md:flex justify-between">
                            <div>
                              <label>
                                Número de Personas para la habitacion:
                                <Input
                                  className="w-24 md:ml-6"
                                  type="number"
                                  value={numberOfPeople}
                                  onChange={(e) =>
                                    handlePeopleChange(
                                      e,
                                      Number(item.capacidad)
                                    )
                                  }
                                  min="0"
                                />
                              </label>
                            </div>
                            <div>
                              <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4 hidden">
                                Fecha de Reserva
                                <div>
                                  <RangePicker
                                    value={rangoFechas}
                                    className=" lg:flex-1 hidden md:flex"
                                    placeholder={["Inicio", "Fin"]}
                                    onChange={(date) => setRangoFechas(date)}
                                  />
                                </div>
                              </label>

                              <label className="lg:mr-4 md:w-[400px] md:hidden justify-between mb-4">
                                Fecha Inicio:
                                <div>
                                  <DatePicker
                                    size="large"
                                    onChange={(date) => setFechaInicio(date)}
                                    placeholder="Fecha de inicio"
                                    className="w-60 lg:ml-3"
                                  />
                                </div>
                              </label>
                              <label className="lg:mr-4 md:w-[400px] md:hidden justify-between mb-4">
                                Fecha Final:
                                <div>
                                  <DatePicker
                                    size="large"
                                    onChange={(date) => setFechaFin(date)}
                                    placeholder="Fecha de fin"
                                    className="w-60 lg:ml-3"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>

                          <div>
                            {people.map((person, index) => (
                              <FormReservation
                                key={index}
                                person={person}
                                index={index}
                                handlePersonChange={handlePersonChange}
                              />
                            ))}
                          </div>
                        </div>
                        {people.length > 0 && (
                          <div className="flex justify-end">
                            <button
                              className=""
                              onClick={() => handleReservation(item)}
                            >
                              Confirmar
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchRoom;
