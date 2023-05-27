import React from "react";

type Props = {};

const WhatWeDo = (props: Props) => {
  return (
    <div className="relative w-full h-fit mt-52 px-44 ">
      <h2 className=" font-druk-wide text-primary text-3xl mt-40 mb-8 w-96">
        What we do at Deesignal Media
      </h2>
      <h5 className="w-1/2 text-justify text-xl text-primary">
        Lorem ipsum dolor sit amet, consectetpiscing modo ligulaet dolor. Aenean
        massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis
        natnatibus et magnisrienntes, nascetur Lorem ipsum dolor sit am,
        consectetpiscing elit.ean mmodo ligulaet dolor. Aan massa. Cum sociis
        natnatibus et magnis irtuenntes, nascetur sociis natnatibus et
        magnisrienntes, cetur Lorem ipsum dolor sit amet.ioiuii
      </h5>
      <button className="underline font-lexend my-10 text-lg">
        FIND OUT MORE
      </button>
      <ul className="flex justify-between mt-4 px-12 border-[1px] font-[700] text-lg bg-light border-light-primary w-5/6">
        <li className="z-30 cursor-pointer my-8">WEDDING FILMS</li>
        <li className="z-30 cursor-pointer my-8">LIFE EVENT STREAMING</li>
        <li className="z-30 cursor-pointer my-8">DOCUMENTARY FILMING</li>
        <li className="z-30 cursor-pointer my-8">AUDIO - VISUAL SUPPORT</li>
      </ul>
      {/* <div className="absolute bg-light h-32 w-full"></div> */}
      <div className="absolute -top-[30px] right-[237px] w-[403px] z-20 h-[519px] border-[1px] border-[#0000004D]"></div>
      <div className="absolute top-[30px] right-[237px] w-[403px] bg-light-primary z-20 h-[459px] border-[1px] border-[#0000004D]"></div>
      <div className="absolute -z-10 -top-24 right-44 w-[530px] h-[530px] border-[1px] border-[#0000004D] bg-light"></div>
      <div className="absolute z-10 -top-[95px] border-0 right-[177px] w-[528px] h-[528px] bg-light"></div>
    </div>
  );
};

export default WhatWeDo;
