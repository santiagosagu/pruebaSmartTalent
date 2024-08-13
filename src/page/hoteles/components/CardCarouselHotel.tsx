import { Typography } from "antd";
import { Ihoteles } from "../../../interfaces/hoteles";

interface IProps {
  item: Ihoteles;
  navigation: (id: string) => void;
}

const CardCarouselHotel = ({ item, navigation }: IProps) => {
  return (
    <div
      className="carousel-card flex justify-center"
      onClick={() => navigation(item.id)}
    >
      <div className="w-[276px] h-full border card-shadom rounded-lg">
        <img src={item.image} alt="" className="w-full rounded-lg h-[183px]" />
        <div className="flex flex-col justify-evenly px-2 mt-4 h-48">
          <div>
            <Typography className="text-base font-bold">
              {item.nombre}
            </Typography>
            <Typography>{item.ciudad}</Typography>
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

export default CardCarouselHotel;
