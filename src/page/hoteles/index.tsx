/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Typography } from "antd";
import { DatePicker } from "antd";

import PageviewIcon from "@mui/icons-material/Pageview";
// import Carrusel from "../../components/currusel";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { useRef, useState } from "react";
import SearchHotel from "./components/SearchHotel";
import useScrollToElement from "../../hooks/useScrollToElement";

interface IFilters {
  lugar: string;
  fecha: any;
  huespedes: number;
}

const Hoteles = () => {
  // const [open, setOpen] = useState(false);

  //   const toggleDrawer = (newOpen: boolean) => () => {
  //     setOpen(newOpen);
  //   };

  const [filters, setFilters] = useState<IFilters>({
    lugar: "",
    fecha: "",
    huespedes: 0,
  });

  const [openResults, setOpenResults] = useState(false);

  const resultadoRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = useScrollToElement(resultadoRef);

  const handleFiltersHotels = () => {
    if (filters.lugar) {
      setOpenResults(true);
      scrollToElement();
    }
  };

  const { RangePicker } = DatePicker;

  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKZFttZ5lqIE3B4ec1LHUYWWNDU1MVJ5ud_7KEsr8f_ENoq2h",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Envigado",
      valor: "264.000",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0lOz25QUHwGTLYO5rsOjGTS5PErHteo1otiU9wbmM1_tMj-ID",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Bello",
      valor: "180.000",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRt4FU4PapruWon3qh87018CPVFjfOcIla2LCmk-GBmv7Y8fVOx",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Itagui",
      valor: "300.000",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGwxpXdvUrimdGB2pIeE3_6UnTWoT3kB_qXYpg6OFNt-WpiRgq",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Medellin",
      valor: "250.000",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9qYrr8IPtv7PwiX5KdIm7uZj8W4CrmMzbN8bYHmFCukU4ATjW",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "La ceja",
      valor: "264.000",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToGpyO5yfZ4kIIX93B7aEzukAmfsIFIW0-roQ5xeUNAi7W8ztX",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Milan",
      valor: "280.000",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_QK80wglGpPtdVmQ4QiXSz1fc7JFc4eqFN9fG-pjipH8hoPQ",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Paris",
      valor: "264.000",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSeZmqtfYFCLdzImKCECC0TDrzJAgkHqP42Aq3lqAIcwgmEp5w",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Barcelona",
      valor: "270.000",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTZ69teWM42_jh5Q4ak6Z7hXENxyM071vX2Kvf0GFzj6QRWyAt",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Madrid",
      valor: "270.000",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOHsnjKy-Gm9IYHvvObDXo0WNNnNTanuACNPlx_=w360-h240-n-k-no",
      name: "Jardín de Silleteros Agro Parque Hotel",
      lugar: "Paris",
      valor: "400.000",
    },
  ];

  return (
    <div className="min-h-screen justify-center w-full lg:min-w-[1355px] bg-[#FCFCFE] px-2 ">
      <Header />
      <div className="pt-24 lg:pt-32 flex justify-center">
        <div className="w-full max-w-[1280px] bg-slate-400 lg:min-w-[1280px] min-h-[700px] bg-no-repeat bg-cover bg-center rounded-2xl flex flex-col justify-end pb-16 pl-8 bg-[url('https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D')]">
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
            <Input
              placeholder="A Dónde quieres ir?"
              className="lg:w-[400px]"
              onChange={(e: any) =>
                setFilters({ ...filters, lugar: e.target.value })
              }
            />

            <RangePicker
              size="large"
              className=" flex-1"
              placeholder={["Inicio", "Fin"]}
              onChange={(e: any) =>
                setFilters({ ...filters, fecha: e.target.value })
              }
            />

            <Input
              type="number"
              placeholder="Huéspedes"
              className="lg:w-[400px]"
              onChange={(e: any) =>
                setFilters({ ...filters, huespedes: e.target.value })
              }
            />

            <PageviewIcon
              fontSize="large"
              color="info"
              className="mr-4 items-center cursor-pointer"
              onClick={handleFiltersHotels}
            />
          </div>
        </div>
        <div className="w-full lg:min-w-[1280px] max-w-[1280px] my-12">
          <Typography className="text-2xl font-semibold mb-2">
            Descubre tu nuevo hospedaje favorito
          </Typography>

          <Carousel items={data} type={"cardHotel"} />
        </div>
        <div
          ref={resultadoRef}
          className=" pt-24 lg:pt-32 w-full lg:min-w-[1280px] max-w-[1280px]"
        >
          {openResults && <SearchHotel dataResult={data} />}
        </div>
      </div>
    </div>
  );
};

export default Hoteles;
