import React from "react";
import { ReactComponent as SmallArrow } from "../../assets/svg/small-arrow.svg";
import { useNavigate } from "react-router-dom";

type Props = {};

const HeroCard = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="h-56 w-[500px] font-lexend border-light-primary border-2 border-opacity-50">
      <div className="h-3/4 p-10">
        <div className="h-1/3 text-light-primary">Our bragging rights</div>
        <div className="h-2/3 flex justify-between">
          <div className="text-light w-1/3">
            <h3 className="text-6xl font-bold">500+</h3>
            <h6 className=" text-sm">Satisfied Customers</h6>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 h-20" />
          <div className="text-light w-2/4">
            <h3 className="text-6xl font-bold">1K+</h3>
            <h6 className=" text-sm">Successful Media Coverage</h6>
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate("/our_works")}
        className="h-1/4 flex justify-between py-4 px-10 cursor-pointer bg-light-primary"
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
