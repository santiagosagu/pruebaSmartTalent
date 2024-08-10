import { Typography } from "antd";
import Header from "../../components/header";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "../../components/carousel";
import { useNavigate } from "react-router-dom";

interface IiTemsMejoresPrecios {
  image: string;
  hacia: string;
  desde: string;
  valor: string;
}

interface IitemsPaquetesVendidos {
  image: string;
  location: string;
  hotelName: string;
  alimentacion: string;
  valor: string;
}

const itemsSectionMejoresPrecios: IiTemsMejoresPrecios[] = [
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU_XlglUwAqnB5_RpYXaYJ2NQ2AkcTzHMFsi2AznT3UGmUWpYu",
    hacia: "bogotá",
    desde: "medellín",
    valor: "96.399",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIyZP0lC7ynjbOdxQBBV7QCWXQwW4MHo6J54o016rcCN2YKvWM",
    hacia: "cartagena",
    desde: "medellín",
    valor: "83.900",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSowaSOIuCegZuwJ9KYx1Hc8D220O4RYDq9DOSGIaQUMX6sV83p",
    hacia: "miami",
    desde: "bogotá",
    valor: "1.500.399",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYGEXUAFoWntY5nivDlY_E0xab7U5hTOXuMUt1D6fP75vvXNQ",
    hacia: "medellín",
    desde: "bogotá",
    valor: "88.000",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU_XlglUwAqnB5_RpYXaYJ2NQ2AkcTzHMFsi2AznT3UGmUWpYu",
    hacia: "bogotá",
    desde: "medellín",
    valor: "96.399",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIyZP0lC7ynjbOdxQBBV7QCWXQwW4MHo6J54o016rcCN2YKvWM",
    hacia: "cartagena",
    desde: "medellín",
    valor: "83.900",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSowaSOIuCegZuwJ9KYx1Hc8D220O4RYDq9DOSGIaQUMX6sV83p",
    hacia: "miami",
    desde: "bogotá",
    valor: "1.500.399",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYGEXUAFoWntY5nivDlY_E0xab7U5hTOXuMUt1D6fP75vvXNQ",
    hacia: "medellín",
    desde: "bogotá",
    valor: "88.000",
  },
];

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

const dataPaquetesVendidos: IitemsPaquetesVendidos[] = [
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1kyNapRh95oYNYq9dH-O9wf4LSlgx6Baj8FedEsOj4ZZ2hCGg",
    location: "Punta Cana",
    hotelName: "Bahia Principe Luxury Esmeralda",
    alimentacion: "Todo incluido",
    valor: "7.705.000",
  },
  {
    image:
      "https://lh5.googleusercontent.com/p/AF1QipO9q4T0s1DmCwv9a_VmuXxEbGAIgPDIpJn-ZAI7=w360-h240-n-k-no",
    location: "Punta Cana",
    hotelName: "Bahia Principe Luxury Esmeralda",
    alimentacion: "Todo incluido",
    valor: "7.705.000",
  },
  {
    image:
      "https://lh4.googleusercontent.com/proxy/KCXxQj8FJv4MgchQDMpmkM38AMvMSD0Uh7vfYFJxAf4K4eIULExDfK4WKeAy_TWtjZ1mc9J42uI_QxYrgqVklo058m0TFFZ-q_ua8PgUbVA5_e3n5au8fYvs0nZYaOnkb3OMI77nsk6sXHun_-YAOkgqqunLdQ=w360-h240-n-k-no",
    location: "Punta Cana",
    hotelName: "Bahia Principe Luxury Esmeralda",
    alimentacion: "Todo incluido",
    valor: "7.705.000",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpxcFP5HvENc6OySrRXqpcHI-coGXotMvL9FipZGh4_2egaoUQ",
    location: "Punta Cana",
    hotelName: "Bahia Principe Luxury Esmeralda",
    alimentacion: "Todo incluido",
    valor: "7.705.000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Punta Cana",
    hotelName: "Bahia Principe Luxury Esmeralda",
    alimentacion: "Todo incluido",
    valor: "7.705.000",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1kyNapRh95oYNYq9dH-O9wf4LSlgx6Baj8FedEsOj4ZZ2hCGg",
    location: "Punta Cana",
    hotelName: "Bahia Principe Luxury Esmeralda",
    alimentacion: "Todo incluido",
    valor: "7.705.000",
  },
];

const Flights = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/habitaciones/1");
  };

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
                <div
                  key={index}
                  className="flex justify-between w-full lg:w-[48%] lg:h-[100px] items-center border bg-white rounded-lg"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[119px] h-[119px] lg:h-full object-cover rounded-l-lg"
                  />
                  <div className="flex justify-evenly gap-10 flex-1 ml-1 md:ml-0">
                    <div>
                      <Typography className="font-bold text-[12px]  md:text-base">
                        Vuelo a {item.hacia}
                      </Typography>
                      <Typography className="font-semibold text-[10px]  md:text-xs">
                        Saliendo desde {item.desde}
                      </Typography>
                    </div>
                    <div>
                      <Typography className="text-[10px] lg:text-xs font-semibold">
                        Precio por trayecto desde
                      </Typography>
                      <Typography className="text-lg font-bold">
                        ${item.valor}
                      </Typography>
                      <Typography className="text-[10px] lg:text-xs font-semibold">
                        incluye impuestos, tasas y/o cargos
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon fontSize="large" />
                  </div>
                </div>
              )
            )}
          </div>
          <div className="mt-12 card-shadom  w-full max-w-[1280px] bg-slate-400 lg:min-w-[1280px] min-h-[700px] lg:h-[400px] bg-no-repeat bg-cover bg-center rounded-2xl flex flex-col justify-end md:pb-12 md:pl-8 bg-[url('https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="bg-white md:w-[500px] p-5 rounded-lg card-shadom">
              <Typography className="text-xl text-black font-bold">
                Ven y disfruta de un rato agradable con nuestros <br /> mejores
                hoteles
              </Typography>
              <button className="bg-blue-900 text-white rounded-lg p-2 mt-4">
                Ver Mas
              </button>
            </div>
          </div>
          <div className="w-full lg:min-w-[1280px] max-w-[1280px] my-12">
            <Typography className="text-xl font-semibold mb-2">
              Descubre tu nuevo hospedaje favorito
            </Typography>

            <Carousel
              items={data}
              type={"cardHotel"}
              navigation={handleNavigate}
            />
          </div>
          <div className="w-full lg:min-w-[1280px] max-w-[1280px] my-12">
            <Typography className="text-xl font-semibold mb-2">
              Paquetes más vendidos
            </Typography>

            <Carousel items={dataPaquetesVendidos} type={"paquetesVendidos"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
