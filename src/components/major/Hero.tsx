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
    <div className="pt-32 lg:pt-0">
      <AutoSlideTextCarousel texts={texts} interval={2000} />
      <div className="lg:p-32 gap-5 pb-0 md:pb-0 flex flex-col lg:flex-row items-center justify-between">
        <HeroCard />
        <HeroParagraph />
      </div>
    </div>
  );
};

export default Hero;
