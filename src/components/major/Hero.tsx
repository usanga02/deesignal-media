import React from "react";
import AutoSlideTextCarousel from "../../helpers/carousel";
import HeroCard from "../basic/HeroCard";
import HeroParagraph from "../basic/HeroParagraph";

type Props = {};

const Hero = (props: Props) => {
  const texts = [
    "Let's Shoot",
    "Let's Shoot",
    "Let's Shoot",
    "Let's Shoot",
    "Let's Shoot",
  ];
  return (
    <div className="bg-primary">
      <AutoSlideTextCarousel texts={texts} interval={2000} />
      <div className="md:p-32 p-16 mt-10 pb-0 flex flex-col md:flex-row items-center justify-between">
        <HeroCard />
        <HeroParagraph />
      </div>
    </div>
  );
};

export default Hero;
