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
      <div className="p-32 mt-10 pb-0 flex justify-between">
        <HeroCard />
        <HeroParagraph />
      </div>
    </div>
  );
};

export default Hero;
