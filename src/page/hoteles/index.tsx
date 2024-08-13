/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Input, Select, Typography } from "antd";
import { DatePicker } from "antd";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageviewIcon from "@mui/icons-material/Pageview";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import useScrollToElement from "../../hooks/useScrollToElement";
import useGetServices from "../../api/services/useGetServices";
import SearchRoom from "./components/SearchRoom";
import useFilterRoom from "./hooks/useFilterRoom";

const Hoteles = () => {
  const resultadoRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = useScrollToElement(resultadoRef);

  const { RangePicker } = DatePicker;

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/habitaciones/${id}`);
  };

  const { data: dataHoteles, isLoading: isLoadingHoteles } = useGetServices({
    key: "hoteles",
    collectionName: "hoteles",
    filters: [["disponible", "==", true]],
  });

  const [hoteles, setHoteles] = useState<any>([]);
  const [rangoFechas, setRangoFechas] = useState<any>([]);
  const [fechaInicio, setFechaInicio] = useState<any>(null);
  const [fechaFin, setFechaFin] = useState<any>(null);
  const [habitacionesDisponibles, setHabitacionesDisponibles] = useState<any>(
    []
  );
  const [ciudad, setCiudad] = useState<string>("");
  const [huespedes, setHuespedes] = useState<number>(1);

  const buscarHabitacionesDisponibles = useFilterRoom({
    hoteles,
    rangoFechas,
    setHabitacionesDisponibles,
    ciudad,
    huespedes,
    fechaInicio,
    fechaFin,
  });

  useEffect(() => {
    if (dataHoteles) {
      setHoteles(dataHoteles);
    }
  }, [dataHoteles]);

  useEffect(() => {
    if (habitacionesDisponibles.length > 0) {
      scrollToElement();
    }
  }, [habitacionesDisponibles]);

  return (
    <div className="min-h-screen justify-center w-full lg:min-w-[1355px] bg-[#f4f1f1]  px-2 ">
      <Header />
      <div className="pt-24 lg:pt-32 flex justify-center">
        <div className="w-full max-w-[1280px] bg-slate-400 lg:min-w-[1280px] min-h-[700px] bg-no-repeat bg-cover bg-center rounded-2xl flex flex-col justify-end pb-16 pl-8 bg-[url('https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <Typography className="text-3xl text-white font-bold">
            Ven y disfruta de un rato agradable con nuestros <br /> mejores
            hoteles
          </Typography>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="w-full lg:min-w-[1280px] max-w-[1280px] mt-8">
          <Typography className="text-2xl font-semibold mb-5">
            ¿A dónde vas?
          </Typography>
          <div className="flex gap-4 lg:gap-12 flex-col lg:flex-row px-7">
            <Select
              placeholder="A Dónde quieres ir?"
              className="lg:w-[400px]"
              size="large"
              options={[
                { value: "medellin", label: "Medellin" },
                { value: "bello", label: "Bello" },
                { value: "envigado", label: "Envigado" },

                { value: "itagui", label: "Itagui" },
              ]}
              onChange={(value) => setCiudad(value)}
            />

            <RangePicker
              size="large"
              className=" lg:flex-1 hidden md:flex"
              placeholder={["Inicio", "Fin"]}
              onChange={(dates) => setRangoFechas(dates)}
            />

            <DatePicker
              onChange={(date) => setFechaInicio(date)}
              placeholder="Fecha de inicio"
              className=" lg:hidden"
            />
            <DatePicker
              onChange={(date) => setFechaFin(date)}
              placeholder="Fecha de fin"
              className=" lg:hidden"
            />

            <Input
              type="number"
              placeholder="Huéspedes"
              className="lg:w-[400px]"
              onChange={(e) => setHuespedes(Number(e.target.value))}
            />

            <PageviewIcon
              fontSize="large"
              color="info"
              className="mr-4 items-center cursor-pointer"
              onClick={buscarHabitacionesDisponibles}
            />
          </div>
        </div>
        <div>
          <div className="w-full lg:min-w-[1280px] max-w-[1280px] my-12">
            <Typography className="text-2xl font-semibold mb-2">
              Descubre tu nuevo hospedaje favorito
            </Typography>
            {isLoadingHoteles && <CircularProgress />}
            {dataHoteles && (
              <Carousel
                items={dataHoteles}
                type={"cardHotel"}
                navigation={handleNavigate}
              />
            )}
          </div>
          <div
            ref={resultadoRef}
            className=" pt-24 lg:pt-32 w-full lg:min-w-[1280px] max-w-[1280px]"
          >
            {habitacionesDisponibles.length > 0 && (
              <SearchRoom dataSearch={habitacionesDisponibles} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoteles;
