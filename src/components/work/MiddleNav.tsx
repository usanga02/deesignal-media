import React from "react";
import { TbArrowBackUp } from 'react-icons/tb'

// type Props = {
//   label: string;
//   extraClass?: string;
// };

const MiddleNav = () => {
  return (
    <div className="sm:px-16 px-5 py-10">

      <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-5">

        <div>
          <button className="flex items-center gap-2">
            <TbArrowBackUp />
            <span>Back to Our Works</span>
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto w-full">
          {["Wedding Films", "Documentary Filming", "Audio - Visual Support"].map((wrk, i) => (
            <button key={i} className="border-r pr-5 border-[#d3d3d3]">{wrk}</button>
          ))}
        </div>


        <div></div>
      </div>



    </div>

  )
};

export default MiddleNav;
