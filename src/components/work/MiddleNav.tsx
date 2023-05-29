import React from "react";
import { TbArrowBackUp } from 'react-icons/tb'

// type Props = {
//   label: string;
//   extraClass?: string;
// };

const MiddleNav = () => {
  return (
    <div className="px-16 py-10">

      <div className="flex justify-between">

        <div>
          <button className="flex items-center gap-2">
            <TbArrowBackUp />
            <span>Back to Our Works</span>
          </button>
        </div>

        <div className="flex gap-5">
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
