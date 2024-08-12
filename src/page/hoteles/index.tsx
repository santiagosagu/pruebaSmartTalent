/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { Input, Typography } from "antd";
import { DatePicker } from "antd";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageviewIcon from "@mui/icons-material/Pageview";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import SearchHotel from "./components/SearchHotel";
import useScrollToElement from "../../hooks/useScrollToElement";
import useGetServices from "../../api/services/useGetServices";

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

  const { RangePicker } = DatePicker;

  const handleFiltersHotels = () => {
    if (filters.lugar) {
      setOpenResults(true);
      scrollToElement();
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/habitaciones/1");
  };

  const { data: dataHoteles, isLoading: isLoadingHoteles } = useGetServices({
    key: "hoteles",
    collectionName: "hoteles",
  });

  return (
    <div className="min-h-screen justify-center w-full lg:min-w-[1355px] bg-[#FCFCFE] px-2 ">
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
            {openResults && <SearchHotel dataResult={dataHoteles} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoteles;
