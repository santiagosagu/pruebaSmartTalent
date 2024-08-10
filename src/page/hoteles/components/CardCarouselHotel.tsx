import { Typography } from "antd";

interface IData {
  image: string;
  name: string;
  lugar: string;
  valor: string;
}

interface IProps {
  item: IData;
  navigation: () => void;
}

const CardCarouselHotel = ({ item, navigation }: IProps) => {
  return (
    <div className="carousel-card flex justify-center" onClick={navigation}>
      <div className="w-[276px] h-full border card-shadom rounded-lg">
        <img src={item.image} alt="" className="w-full rounded-lg h-[183px]" />
        <div className="flex flex-col justify-evenly px-2 mt-4 h-48">
          <div>
            <Typography className="text-base font-bold">{item.name}</Typography>
            <Typography>{item.lugar}</Typography>
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
