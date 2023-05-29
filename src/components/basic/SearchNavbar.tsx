import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";

type Props = {};

const SearchNavbar = (props: Props) => {
  return (
    <div className="flex mx-32 h-16 py-4 px-6 items-center border-[1px] border-light-primary font-lexend">
      <div className="flex justify-start w-full h-full items-center text-light-primary">
        <SearchIcon className="fill-primary h-6" />
        <input
          className="placeholder-light-primary pl-2 outline-none text-primary w-full"
          placeholder="Search Work Name"
        />
      </div>
      <div className="flex justify-end w-full items-center">
        <div className="flex h-8 py-2 px-3 mx-3 cursor-pointer bg-light-primary w-52 items-center justify-between">
          <h4>LOCATION</h4>
          <p className="pb-1">↓</p>
        </div>
        <div className="flex h-8 py-2 px-3  cursor-pointer mx-3 bg-light-primary w-52 items-center justify-between">
          <h4>SERVICE TYPE</h4>
          <p className="pb-1">↓</p>
        </div>
        <h4 className="ml-3 w-24 cursor-pointer">Clear Filters</h4>
      </div>
    </div>
  );
};

export default SearchNavbar;
