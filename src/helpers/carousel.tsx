import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../assets/svg/Forward-Arrow.svg";
import "./AutoSlideTextCarousel.css";

interface AutoSlideTextCarouselProps {
  texts: string[];
  interval?: number;
  transitionDuration?: number;
}

const AutoSlideTextCarousel: React.FC<AutoSlideTextCarouselProps> = ({
  texts,
  interval = 3000,
  transitionDuration = 0.5,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % texts.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [texts.length, interval]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.setProperty(
        "--currentSlide",
        `${currentSlide}`
      );
    }
  }, [currentSlide]);

  return (
    <div className="carousel md:mt-14 hidden lg:block lg:mt-44 font-druk-wide text-5xl">
      <div className="carousel-inner" ref={carouselRef}>
        {texts.map((text, index) => (
          <div
            key={index}
            className="carousel-slide flex mt-32 md:mt-0 items-center text-light-primary"
          >
            <h2 className="flex shrink-0 text-xs sm:text-base md:text-3xl lg:text-4xl xl:text-5xl">
              {text}
            </h2>
            <Arrow className="xl:ml-16 mx-3 sm:ml-6 md:ml-10 lg:ml-12" />
          </div>
        ))}
        <div className="carousel-slide">{texts[0]}</div>
      </div>
    </div>
  );
};

export default AutoSlideTextCarousel;
