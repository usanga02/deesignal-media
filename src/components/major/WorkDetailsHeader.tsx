import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


type Props = {};

const WorkDetailsHeader = (props: Props) => {
  const navigate = useNavigate();


  return (
    <div className="px-16 mt-10">
      <button
        onClick={() => navigate("/our_works")}
        className="flex items-center gap-2 text-gray-600 text-sm"
      >
        <TbArrowBackUp />
        <span>Back Wedding Films</span>
      </button>

      <div>
        <h1 className="font-druk-wide leading-relaxed text-[30px] w-[500px] mt-2 mb-5">IFEOLUWA & ADEBISI FEB 15th 2023</h1>

        <div className="flex justify-between gap-5 items-center">

          <img src={require("../../assets/img/wedding/wedding1.png")} className="object-cover" alt="" />

          <img src={require("../../assets/img/wedding/wedding2.png")} className="h-[90%] object-cover" alt="" />

          <div className="-mt-[30%]">
            <img src={require("../../assets/img/wedding/wedding3.png")} className="object-cover" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkDetailsHeader;
