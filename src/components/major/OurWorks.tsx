import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const OurWorks = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="lg:pb-14 mt-10 h-fit lg:mt-20">
      <h3 className="font-druk-wide text-lg md:text-2xl lg:my-10 mb-5 lg:mb-0 text-night text-center">
        Our Works
      </h3>
      <div className="flex lg:flex-row flex-col gap-2 h-[900px] lg:h-[80vh] px-10 lg:px-32 lg:py-5">
        <div className="lg:px-5 lg:justify-end h-full lg:w-1/3">
          <div className="relative flex flex-col justify-end h-full">
            <h5 className="absolute lg:relative ml-3 text-light lg:text-night lg:ml-0 font-bold my-3 font-lexend">
              SPORT BROADCAST
            </h5>
            <div className=" bg-cover bg-center bg-sport-broadcast bg-no-repeat bg-fixed h-full lg:h-2/3"></div>
          </div>
          <hr className="text-light border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light hidden lg:block border-[1px] text-opacity-50 h-full" />
        <div className="lg:px-5 h-full lg:w-2/5">
          <div className="relative bg-love-story bg-cover bg-center bg-no-repeat bg-fixed h-full">
            <h5 className="absolute right-5 text-light bottom-0 font-bold my-3 font-lexend">
              A LOVE STORY
            </h5>
          </div>
          <hr className="text-light border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light hidden lg:block border-[1px] text-opacity-50 h-full" />
        <div className="lg:px-5 justify-start h-full lg:w-1/3">
          <div className="relative h-full pb-1">
            <div className=" bg-power-shooter bg-cover bg-center bg-no-repeat bg-fixed h-[75%] lg:h-2/3"></div>
            <h5 className="text-end my-3 font-bold font-lexend">
              A DAY IN IBADUN ZOO
            </h5>
            <div className="w-full flex justify-end">
              <button
                onClick={() => navigate("/our_works")}
                className="lg:absolute right-0 bottom-16 font-[600]"
              >
                <span className="font-bold text-2xl pr-3">→</span>
                View All
              </button>
            </div>
          </div>
          <hr className="text-light border-[1px] text-opacity-50 mt-5" />
        </div>
      </div>
      <div className="flex flex-col mt-10 lg:mt-0 justify-center">
        <div className="flex flex-col items-center lg:flex-row px-10 lg:px-32 lg:py-5 h-72">
          <div className="flex flex-col order-3 lg:order-1 mx-5 w-1/2 justify-center items-center">
            <h4
              onClick={() => navigate("/book_us")}
              className="font-druk-wide w-32 text-lg mb-5 lg:mb-0 underline mt-10 cursor-pointer text-night text-center"
            >
              Book Us Now
            </h4>
          </div>
          <hr className="text-light border-[1px] order-2 text-opacity-50 h-[1px] w-full lg:w-[1px] lg:h-full" />
          <div className="bg-sharp-shooter bg-cover bg-center order-1 lg:order-3 bg-no-repeat bg-fixed h-full w-full lg:w-1/2 mx-5 relative">
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
