import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

// type Props = {
//   label: string;
//   extraClass?: string;
// };

const MiddleNav = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:px-16 px-5 py-10">
      <div className="flex md:flex-row flex-col justify-between md:justify-start md:gap-0 gap-5">
        <div className="w-1/4">
          <button
            onClick={() => navigate("/our_works")}
            className="flex items-center gap-2"
          >
            <TbArrowBackUp />
            <span>Back to Our Works</span>
          </button>
        </div>

        <div className="flex ml-32 gap-5 overflow-x-auto w-2/3">
          {[
            "Wedding Films",
            "Documentary Filming",
            "Audio - Visual Support",
          ].map((wrk, i) => (
            <button key={i} className="border-r pr-5 border-[#d3d3d3]">
              {wrk}
            </button>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MiddleNav;
