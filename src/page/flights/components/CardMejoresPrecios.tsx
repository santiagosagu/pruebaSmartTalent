import { Typography } from "antd";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IiTemsMejoresPrecios } from "../../../interfaces/flights";

interface IProps {
  item: IiTemsMejoresPrecios;
}

const CardMejoresPrecios = ({ item }: IProps) => {
  return (
    <div className="flex justify-between w-full lg:w-[48%] lg:h-[100px] items-center border bg-white rounded-lg">
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
          <Typography className="text-lg font-bold">${item.valor}</Typography>
          <Typography className="text-[10px] lg:text-xs font-semibold">
            incluye impuestos, tasas y/o cargos
          </Typography>
        </div>
      </div>
      <div>
        <ChevronRightIcon fontSize="large" />
      </div>
    </div>
  );
};

export default CardMejoresPrecios;
