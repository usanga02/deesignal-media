import React from "react";
import { ReactComponent as SmallArrow } from "../../assets/svg/small-arrow.svg";
import { useNavigate } from "react-router-dom";

type Props = {};

const HeroCard = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="md:h-56 w-[330px] sm:w-[370px] md:w-[500px] font-lexend border-light-primary border-2 border-opacity-50">
      <div className="h-3/5 md:h-3/4 p-4 xl:p-10">
        <div className="h-1/3 text-[10px] md:text-base text-light-primary">
          Our bragging rights
        </div>
        <div className="h-2/3 flex justify-between">
          <div className="text-light lg:w-1/2 xl:w-1/3">
            <h3 className="text-4xl md:text-6xl font-bold">500+</h3>
            <h6 className="text-[10px] sm:text-xs md:text-sm">
              Satisfied Customers
            </h6>
          </div>
          <hr className="text-light-primary border-[1px] mx-3 text-opacity-50 h-16 md:h-20" />
          <div className="text-light lg:w-1/2 xl:w-2/4">
            <h3 className="text-4xl md:text-6xl font-bold">1K+</h3>
            <h6 className="text-[10px] sm:text-xs md:text-sm">
              Successful Media Coverage
            </h6>
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate("/our_works")}
        className="h-1/5 md:h-1/4 flex justify-between py-2 md:py-4 px-4 md:px-10 cursor-pointer bg-light-primary"
      >
        <div>See Our Works</div>
        <div className="py-2">
          <SmallArrow />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
