import { Typography } from "antd";

interface IDataPaquete {
  image: string;
  location: string;
  hotelName: string;
  alimentacion: string;
  valor: string;
}

interface IProps {
  item: IDataPaquete;
}

const CardCarouselPaquetesVendidos = ({ item }: IProps) => {
  return (
    <div className="carousel-card flex justify-center">
      <div className="w-[276px] h-full border card-shadom rounded-lg">
        <img
          src={item.image}
          alt=""
          className="w-full rounded-br-[3.5rem] h-[183px]"
        />
        <div className="flex flex-col justify-evenly px-2 mt-4 h-48">
          <div>
            <Typography>Paquete en {item.location}</Typography>
            <Typography className="text-base font-bold">
              {item.hotelName}
            </Typography>
          </div>
          <div>
            <Typography className="font-bold text-lg mt-4">
              {`COP ${item.valor}`}
            </Typography>
            <Typography>impuestos y cargos incluidos</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarouselPaquetesVendidos;
