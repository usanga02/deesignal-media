import React from "react";
import { ReactComponent as SmallArrow } from "../../assets/svg/small-arrow.svg";

type Props = {};

const ControlsButtons = (props: Props) => {
  return (
    <div className="flex justify-between w-44">
      <button className="border-[1px] hover:bg-light-primary border-light-primary p-5">
        <SmallArrow className=" -scale-x-100" />
      </button>
      <button className="border-[1px] hover:bg-light-primary border-light-primary p-5">
        <SmallArrow className="" />
      </button>
    </div>
  );
};

export default ControlsButtons;
