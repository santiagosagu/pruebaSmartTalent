/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "antd";
import CardCarouselHotel from "./CardCarouselHotel";
import { useNavigate } from "react-router-dom";

const SearchHotel = ({ dataResult }: any) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/habitaciones/1");
  };

  return (
    <div className="w-full">
      <Typography className="text-center text-2xl font-semibold">
        Resultados de la busqueda
      </Typography>
      <div className="carousel-container w-full flex flex-wrap justify-center items-center">
        {dataResult.map((item: any, index: any) => (
          <CardCarouselHotel
            item={item}
            key={index}
            navigation={handleNavigate}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchHotel;
