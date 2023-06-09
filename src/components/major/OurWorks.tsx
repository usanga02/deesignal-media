import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const OurWorks = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="pb-14 mt-10 lg:mt-20">
      <h3 className="font-druk-wide text-lg md:text-2xl my-10 text-night text-center">
        Our Works
      </h3>
      <div className="flex md:px-16 px-5 md:flex-nowrap flex-wrap py-5">
        
        <div className="px-5 justify-end h-full md:w-1/3 w-full">
          <div className="flex flex-col justify-end h-full">
            <h5 className="font-bold my-3 font-lexend">SPORT BROADCAST</h5>
            <div className=" bg-cover bg-center bg-sport-broadcast bg-no-repeat bg-fixed h-[300px]"></div>
          </div>
          <hr className="text-light border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light border-[1px] text-opacity-50 h-full" />
       
        <div className="px-5 h-full md:w-2/5 w-full">
          <div className="relative bg-love-story bg-cover bg-center bg-no-repeat bg-fixed h-[500px]">
            <h5 className="absolute right-5 text-light bottom-0 font-bold my-3 font-lexend">
              A LOVE STORY
            </h5>
          </div>
          <hr className="text-light border-[1px] text-opacity-50 mt-5" />
        </div>
        
        <hr className="text-light border-[1px] text-opacity-50 h-full" />
        
        <div className="px-5 justify-start h-full md:w-1/3 w-full">
          <div className="relative h-full">
            <div className=" bg-power-shooter bg-cover bg-center bg-no-repeat bg-fixed  h-[300px]"></div>
            <h5 className="text-end my-3 font-bold font-lexend">
              A DAY IN IBADUN ZOO
            </h5>
            <button
              onClick={() => navigate("/our_works")}
              className="absolute right-0 bottom-16 font-[600]"
            >
              <span className="font-bold text-2xl pr-3">→</span>
              View All
            </button>
          </div>
          <hr className="text-light border-[1px] text-opacity-50 mt-5" />
        </div>
      </div>



      <div className="flex flex-col justify-center">
        <div className="flex md:px-32 px-5 md:flex-row flex-col py-5 h-72">
          <div className="flex flex-col  md:mx-5 md:w-1/2 md:mb-0 mb-5 justify-center items-center">
            <h4
              onClick={() => navigate("/book_us")}
              className="font-druk-wide md:w-32 text-lg underline md:mt-10 cursor-pointer text-night text-center"
            >
              Book Us Now
            </h4>
          </div>
          <hr className="text-light border-[1px] md:block hidden text-opacity-50 h-full" />
          <div className="bg-sharp-shooter bg-cover bg-center bg-no-repeat bg-fixed h-full md:w-1/2 w-full md:mx-5 relative">
            <h5 className="absolute bottom-3 text-light left-4 font-lexend font-bold">
              LET THERE BE LIGHT
            </h5>
          </div>
        </div>
        <hr className="text-light border-[1px] text-opacity-50 w-1/3 self-center" />
      </div>
    </div>
  );
};

export default OurWorks;
