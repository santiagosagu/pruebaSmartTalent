import { Input, Typography } from "antd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FlatwareIcon from "@mui/icons-material/Flatware";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import FormReservation from "./components/FormReservation";
import Header from "../../components/header";
import { IDataHabitacion, Iperson } from "../../interfaces/chooseRom";
import useGetOne from "../../api/services/getServices/useGetOne";
import { CircularProgress } from "@mui/material";
// import { useParams } from "react-router-dom";

const ChooseRom = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [people, setPeople] = useState<Iperson[]>([]);

  const [open, setOpen] = useState({
    status: false,
    index: 0,
  });

  const { data: dataSingleHoteles, isLoading: isLoadingSingleHoteles } =
    useGetOne({
      key: "singleHotel",
      resource: ["hoteles", "/1"],
    });

  const handleOpenForm = (index: number) => {
    setOpen({ status: !open.status, index });
    setPeople([]);
    setNumberOfPeople(0);
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

  const handleReservation = (id: string) => {
    console.log("Reservación:", {
      idHotel: dataSingleHoteles.nameHotel,
      idHabitacion: id,
      people,
    });
  };

  // const { id } = useParams();

  return (
    <div className="min-h-screen justify-center w-full lg:min-w-[1355px] bg-[#FCFCFE] px-2 ">
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
          <Typography className="text-3xl font-semibold uppercase mt-2 text-center">
            Jardín de Silleteros Agro Parque Hotel
          </Typography>
        </div>
        <div>
          <Typography className="mt-16 font-semibold text-lg mb-6">
            Elige tu habitación
          </Typography>

          {isLoadingSingleHoteles && <CircularProgress />}
          {dataSingleHoteles && (
            <div>
              {dataSingleHoteles.habitaciones.map(
                (item: IDataHabitacion, index: number) => (
                  <div className="mb-4 card-shadom" key={index}>
                    <div className="md:flex border rounded-t-lg">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full md:w-[200px] h-[250px] md:h-[200px] mb-3 lg:mb-0"
                      />
                      <div className="lg:ml-20 md:mt-4 lg:mt-0 lg:flex gap-3 justify-evenly w-full items-center">
                        <Typography className="text-base px-3 lg:px-0">
                          <PeopleAltIcon className="mr-1" />
                          capacidad {item.capacidad}
                        </Typography>
                        <Typography className="text-base px-3 lg:px-0">
                          <FlatwareIcon /> Desayuno incluido
                        </Typography>
                        <Typography className="text-base px-3 lg:px-0">
                          <DirectionsCarIcon /> Estacionamiento gratis
                        </Typography>
                        <div className="p-3 bg-orange-100 rounded-lg mt-4 lg:mt-0">
                          <Typography className="text-xl">
                            <AttachMoneyIcon /> {item.valor}
                          </Typography>
                        </div>
                      </div>
                      <div
                        className="flex flex-col justify-end p-2 w-full lg:w-44"
                        onClick={() => handleOpenForm(index)}
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
                            <div>
                              <label>
                                Número de Personas para la habitacion:
                                <Input
                                  className="w-24 ml-6"
                                  type="number"
                                  value={numberOfPeople}
                                  onChange={(e) =>
                                    handlePeopleChange(e, item.capacidad)
                                  }
                                  min="0"
                                />
                              </label>
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
                                onClick={() => handleReservation(item.id)}
                              >
                                Confirmar
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseRom;
