/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardCarouselHotel from "../../page/hoteles/components/CardCarouselHotel";
import CardCarouselPaquetesVendidos from "../../page/flights/components/CardCarouselPaquetesVendidos";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

const Carousel = ({ items, type, navigation }: any) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 870px)");
  const isPortatil = useMediaQuery("(max-width: 1000px)");

  const visibleCards = isMobile ? 1 : isTablet ? 2 : isPortatil ? 3 : 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? items.length - visibleCards
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex >= items.length - visibleCards;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      if (diffX > 50) {
        nextSlide();
      } else if (diffX < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCards);

  return (
    <div
      className="carousel px-10 w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="carousel-button left" onClick={prevSlide}>
        <ArrowBackIosIcon />
      </button>
      {type === "paquetesVendidos" && (
        <div className="carousel-container w-full flex justify-center">
          {visibleItems.map((item: any, index: any) => (
            <CardCarouselPaquetesVendidos item={item} key={index} />
          ))}
        </div>
      )}
      {type === "cardHotel" && (
        <div className="carousel-container w-full flex justify-center">
          {visibleItems.map((item: any, index: any) => (
            <CardCarouselHotel
              item={item}
              navigation={navigation}
              key={index}
            />
          ))}
        </div>
      )}

      <button className="carousel-button right " onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;
