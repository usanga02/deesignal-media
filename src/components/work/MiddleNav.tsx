import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

// type Props = {
//   label: string;
//   extraClass?: string;
// };

const MiddleNav = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  function getUrlFromCategory(category: string): string | null {
    const formattedCategory = category.toLowerCase().replace(/ /g, "_");
    return `/our_works/${formattedCategory}`;
  }

  return (
    <div className="w-full sm:px-16 px-5 py-10">
      <div className="flex md:flex-row flex-col justify-between md:px-16 md:justify-start md:gap-0 gap-5">
        <div className="md:w-1/4 flex justify-center md:justify-start">
          <button
            onClick={() => navigate("/our_works")}
            className="flex items-center gap-2"
          >
            <TbArrowBackUp />
            <span>Back to Our Works</span>
          </button>
        </div>

        <div className="md:flex grid grid-cols-2 md:flex-row md:ml-32 gap-2 md:gap-5 text-sm md:text-base overflow-x-auto md:w-2/3">
          {[
            location == "/our_works/wedding_films"
              ? "Live Event Streaming"
              : "Wedding Films",
            location == "/our_works/documentary_films"
              ? "Live Event Streaming"
              : "Documentary Films",
            location == "/our_works/audio_-_visual_support"
              ? "Live Event Streaming"
              : "Audio - Visual Support",
          ].map((wrk, i) =>
            i == 0 ? (
              <button
                onClick={() => navigate(getUrlFromCategory(wrk)!)}
                key={i}
                className="md:border-r border-b md:border-b-0 pb-3 md:pb-0 md:pr-5 col-span-2 border-[#d3d3d3]"
              >
                {wrk}
              </button>
            ) : i == 1 ? (
              <button
                onClick={() => navigate(getUrlFromCategory(wrk)!)}
                key={i}
                className="border-r pr-1 md:pr-5 col-span-1 border-[#d3d3d3]"
              >
                {wrk}
              </button>
            ) : (
              <button
                onClick={() => navigate(getUrlFromCategory(wrk)!)}
                key={i}
                className="col-span-1"
              >
                {wrk}
              </button>
            )
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MiddleNav;
