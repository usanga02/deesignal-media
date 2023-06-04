import React from "react";
import { TbArrowBackUp } from 'react-icons/tb'

// type Props = {
//   label: string;
//   extraClass?: string;
// };

const MiddleNav = () => {
  return (
    <div className="sm:px-16 px-5 py-10">

      <div className="flex md:flex-row flex-col justify-between gap-5 items-center">

        <button className="flex items-center gap-1 w-fit">
          <TbArrowBackUp />
          <span className="text-sm">Go Back</span>
        </button>

        <div className="flex flex-1 md:gap-5 gap-2 overflow-x-auto w-full">
          {["Wedding Films", "Documentary Filming", "Audio - Visual Support"].map((wrk, i) => (
            <button key={i} className="border-r md:pr-5 pr-2 border-[#d3d3d3] sm:text-sm text-xs">{wrk}</button>
          ))}
        </div>


        <div></div>
      </div>



    </div>

  )
};

export default MiddleNav;
