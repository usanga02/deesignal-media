import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../assets/images/Forward-Arrow.svg";
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
    <div className="carousel mt-44 font-druk-wide text-5xl">
      <div className="carousel-inner" ref={carouselRef}>
        {texts.map((text, index) => (
          <div
            key={index}
            className="carousel-slide items-center text-light-primary"
          >
            {text}
            <Arrow
              style={{
                display: "inline",
                height: 50,
                width: 50,
                paddingBottom: 10,
                marginLeft: 56,
              }}
            />
          </div>
        ))}
        <div className="carousel-slide">{texts[0]}</div>
      </div>
    </div>
  );
};

export default AutoSlideTextCarousel;
