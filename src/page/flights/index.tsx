import { Typography } from "antd";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { useNavigate } from "react-router-dom";
import CardMejoresPrecios from "./components/CardMejoresPrecios";
import { IiTemsMejoresPrecios } from "../../interfaces/flights";
import useGetList from "../../api/services/getServices/useGetList";
import { CircularProgress } from "@mui/material";
import { itemsSectionMejoresPrecios } from "./constants/itemsSectionMejoresPrecios";

const Flights = () => {
  const navigate = useNavigate();

  const handleNavigateHoteles = () => {
    navigate("/hoteles");
  };

  const handleNavigateHabitacion = () => {
    navigate("/habitaciones/1");
  };

  const { data: dataHoteles, isLoading: isLoadingHoteles } = useGetList({
    key: "hotelesFlights",
    resource: ["hoteles"],
    keyResults: "hoteles",
  });

  const {
    data: dataPaquetesMasVendidos,
    isLoading: isLoadingPaquetesMasVendidos,
  } = useGetList({
    key: "paquetesMasVendidos",
    resource: ["paquetes-mas-vendidos"],
    keyResults: "paquetesMasVendidos",
  });

  return (
    <div className="min-h-screen justify-center w-full lg:min-w-[1355px] bg-[#f4f1f1]  ">
      <Header />
      <div className="px-2 pt-24 lg:pt-32 flex justify-center flex-col items-center">
        <div className="w-full lg:min-w-[1280px] max-w-[1280px] rounded-r-lg">
          <img
            src="https://www.viajesexito.com/Portals/1/Skins/renovacion/img/banners/2024/08-agosto/inicio/banner-principal-desktop.webp"
            alt="banner"
            className="rounded-lg "
          />
          <Typography className="text-xl mt-16 mb-4 font-semibold">
            Mejores precios en vuelos
          </Typography>
          <div className="flex flex-wrap justify-between gap-4">
            {itemsSectionMejoresPrecios.map(
              (item: IiTemsMejoresPrecios, index) => (
                <CardMejoresPrecios item={item} key={index} />
              )
            )}
          </div>
          <div className="mt-12 card-shadom  w-full max-w-[1280px] bg-slate-400 lg:min-w-[1280px] min-h-[700px] lg:h-[400px] bg-no-repeat bg-cover bg-center rounded-2xl flex flex-col justify-end md:pb-12 md:pl-8 bg-[url('https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="bg-white md:w-[500px] p-5 rounded-lg card-shadom">
              <Typography className="text-xl text-black font-bold">
                Ven y disfruta de un rato agradable con nuestros <br /> mejores
                hoteles
              </Typography>
              <button
                className="bg-blue-900 text-white rounded-lg p-2 mt-4"
                onClick={handleNavigateHoteles}
              >
                Ver Mas
              </button>
            </div>
          </div>
          <div className="w-full lg:min-w-[1280px] max-w-[1280px] my-12">
            <Typography className="text-xl font-semibold mb-2">
              Descubre tu nuevo hospedaje favorito
            </Typography>
            {isLoadingHoteles && <CircularProgress />}
            {dataHoteles && (
              <Carousel
                items={dataHoteles}
                type={"cardHotel"}
                navigation={handleNavigateHabitacion}
              />
            )}
          </div>
          <div className="w-full lg:min-w-[1280px] max-w-[1280px] my-12">
            <Typography className="text-xl font-semibold mb-2">
              Paquetes más vendidos
            </Typography>
            {isLoadingPaquetesMasVendidos && <CircularProgress />}
            {dataPaquetesMasVendidos && (
              <Carousel
                items={dataPaquetesMasVendidos}
                type={"paquetesVendidos"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
