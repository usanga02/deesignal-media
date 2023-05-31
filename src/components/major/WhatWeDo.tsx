import React from "react";

type Props = {};

const WhatWeDo = (props: Props) => {
  return (
    <div className="relative w-[90%] md:w-4/5 mx-auto lg:w-full h-fit lg:mt-52 px-5 lg:px-44 ">
      <div className="w-full flex flex-col items-center lg:items-start">
        <h2 className=" font-druk-wide text-primary text-center lg:text-left text-lg w-60 lg:text-3xl mt-14 lg:mt-0 mb-8 lg:w-96">
          What we do at Deesignal Media
        </h2>
        <h5 className="lg:w-1/2 text-justify text-sm lg:text-xl text-primary">
          Lorem ipsum dolor sit amet, consectetpiscing modo ligulaet dolor.
          Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur
          sociis natnatibus et magnisrienntes, nascetur Lorem ipsum dolor sit
          am, consectetpiscing elit.ean mmodo ligulaet dolor. Aan massa. Cum
          sociis natnatibus et magnis irtuenntes, nascetur sociis natnatibus et
          magnisrienntes, cetur Lorem ipsum dolor sit amet.ioiuii
        </h5>
      </div>
      <div className="w-full flex justify-center lg:justify-start">
        <button className="underline lg:mx-0 font-lexend my-10 text-lg">
          FIND OUT MORE
        </button>
      </div>
      <div className="flex flex-col h-fit">
        <div className="relative h-[350px] sm:h-[450px] md:h-[600px] pb-5 lg:hidden">
          <div className="absolute bottom-10 top-8 md:top-16 right-10 md:right-20 left-10 md:left-20 z-20  border-[1px] border-[#0000004D]"></div>
          <div className="absolute bottom-10 top-16 md:top-32 right-10 md:right-20 left-10 md:left-20 bg-light-primary z-20  border-[1px] border-[#0000004D]"></div>
          <div className="absolute -bottom-20 -z-10 top-0 right-0 left-0  lg:h-[530px] border-[1px] border-[#0000004D] bg-light"></div>
        </div>

        <ul className="lg:flex relative grid text-center grid-cols-5 w-full font-lexend justify-between lg:mt-4 lg:px-12 border-t-0 lg:border-t-[1px] border-[1px] font-[700] text-xs sm:text-sm md:text-lg bg-light border-light-primary lg:w-5/6">
          <button className="z-30 col-span-2 border-r-2 lg:border-r-0 my-3 lg:my-8">
            WEDDING FILMS
          </button>
          <button className="z-30 col-span-3 my-3 lg:my-8">
            LIFE EVENT STREAMING
          </button>
          <button className="z-30 col-span-5 my-3 lg:my-8">
            DOCUMENTARY FILMING
          </button>

          <hr className="col-span-6 absolute right-44 left-44 top-[100px] h-[1px] self-center lg:hidden" />
          <button className="z-30 col-span-5 my-3 lg:my-8">
            AUDIO - VISUAL SUPPORT
          </button>
        </ul>
      </div>
      <div className="absolute hidden lg:block -top-[30px] right-[237px] w-[403px] z-20 h-[519px] border-[1px] border-[#0000004D]"></div>
      <div className="absolute hidden lg:block top-[30px] right-[237px] w-[403px] bg-light-primary z-20 h-[459px] border-[1px] border-[#0000004D]"></div>
      <div className="absolute hidden lg:block -z-10 -top-24 right-44 w-[530px] h-[650px] lg:h-[530px] border-[1px] border-[#0000004D] bg-light"></div>
      <div className="absolute hidden lg:block z-10 -top-[95px] border-0 right-[177px] w-[528px] h-[528px] bg-light"></div>
    </div>
  );
};

export default WhatWeDo;
