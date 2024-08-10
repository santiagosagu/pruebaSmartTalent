/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardCarouselHotel from "../../page/hoteles/components/CardCarouselHotel";

const Carousel = ({ items, type }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (e: any) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: any) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
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
      <div className="carousel-container w-full">
        {visibleItems.map(
          (item: any, index: any) =>
            type === "cardHotel" && (
              <CardCarouselHotel item={item} key={index} />
            )
        )}
      </div>
      <button className="carousel-button right " onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;
