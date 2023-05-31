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
      <div className="md:p-0 sm:p-0 lg:p-32 lg:pb-0 sm:pb-0 mt-10 pb-0 md:pb-0 flex flex-col lg:flex-row items-center justify-between">
        <HeroCard />
        <HeroParagraph />
      </div>
    </div>
  );
};

export default Hero;
