import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";

type Props = {};

const SearchNavbar = (props: Props) => {
  return (
    <div className="relative flex flex-col lg:flex-row mx-8 lg:mx-20 lg:h-16 py-4 px-6 items-center lg:border-[1px] lg:border-[#212152] font-lexend">
      <div className="flex justify-start w-full border-[1px] lg:border-none border-night p-2 lg:p-0 h-full items-center text-light-primary">
        <SearchIcon className="fill-primary h-6" />
        <input
          className="placeholder-light-primary pl-2 outline-none text-primary w-full"
          placeholder="Search Work Name"
        />
      </div>
      <div className="absolute lg:static -bottom-36 flex flex-col lg:flex-row justify-between lg:justify-end  p-3 px-6 lg:p-0 h-[160px] text-light w-full items-center">
        <div className="flex h-10 lg:h-8 py-2 px-3 mx-3 cursor-pointer bg-night w-full lg:w-52 items-center justify-between">
          <h4>LOCATION</h4>
          <p className="pb-1">↓</p>
        </div>
        <div className="flex h-10 lg:h-8 py-2 px-3 cursor-pointer mx-3 bg-night w-full lg:w-52 items-center justify-between">
          <h4>SERVICE TYPE</h4>
          <p className="pb-1">↓</p>
        </div>
        <h4 className="md:ml-3 w-full text-center hover:bg-moon-light lg:hover:bg-transparent md:w-24 py-1.5 text-night cursor-pointer">
          Clear Filters
        </h4>
      </div>
    </div>
  );
};

export default SearchNavbar;
