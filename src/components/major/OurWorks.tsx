import React from "react";

type Props = {};

const OurWorks = (props: Props) => {
  return (
    <div className="pb-14 mt-10 lg:mt-20">
      <h3 className="font-druk-wide text-lg md:text-2xl my-10 text-primary text-center">
        Our Works
      </h3>
      <div className="flex h-[80vh] px-32 py-5">
        <div className="px-5 justify-end h-full w-1/3">
          <div className="flex flex-col justify-end h-full">
            <h5 className="font-bold my-3 font-lexend">SPORT BROADCAST</h5>
            <div className="bg-light-primary h-2/3"></div>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
        <div className="px-5 h-full w-2/5">
          <div className="relative bg-light-primary h-full">
            <h5 className="absolute right-5 bottom-0 font-bold my-3 font-lexend">
              A LOVE STORY
            </h5>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
        <div className="px-5 justify-start h-full w-1/3">
          <div className="h-full">
            <div className="bg-light-primary h-2/3"></div>
            <h5 className="text-end my-3 font-bold font-lexend">
              A DAY IN IBADUN ZOO
            </h5>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex px-32 py-5 h-72">
          <div className="flex flex-col  mx-5 w-1/2 justify-center items-center">
            <h4 className="font-druk-wide w-32 text-lg underline mt-10 cursor-pointer text-primary text-center">
              Book Us Now
            </h4>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
          <div className="bg-light-primary h-full w-1/2 mx-5 relative">
            <h5 className="absolute bottom-3 left-4 font-lexend font-bold">
              LET THERE BE LIGHT
            </h5>
          </div>
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 w-1/3 self-center" />
      </div>
    </div>
  );
};

export default OurWorks;
