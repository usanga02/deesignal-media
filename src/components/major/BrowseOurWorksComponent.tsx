import React from "react";

type Props = {};

const BrowseOurWorksComponent = (props: Props) => {
  return (
    <div className="pb-14 mt-20">
      <h3 className="font-druk-wide text-2xl my-10 text-primary text-center">
        Browse Our Works
      </h3>
      <div className="flex h-[80vh] px-32 py-5">
        <div className="px-5 justify-end h-full w-1/3">
          <div className="flex flex-col justify-end h-full">
            <div className="relative bg-light-primary h-2/3">
              <h5 className="absolute font-bold -top-3 w-full text-center font-lexend">
                WEDDING FILMS
              </h5>
            </div>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
        <div className="px-5 h-full w-2/5">
          <div className="relative bg-light-primary h-full">
            <h5 className="absolute w-full text-center  -bottom-3 font-bold font-lexend">
              LIVE EVENT STREAMING
            </h5>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
        <div className="px-5 justify-start h-full w-1/3">
          <div className="h-full">
            <div className="relative bg-light-primary h-2/3">
              <h5 className="absolute w-full text-center -bottom-3 font-bold font-lexend">
                DOCUMENTARY FILMING
              </h5>
            </div>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex px-32 py-5 h-72">
          <div className="flex flex-col mx-5 w-1/2 justify-center items-center">
            <h4 className="font-druk-wide w-[361px] text-lg mt-10 cursor-pointer text-primary text-center">
              Don’t just capture a moment capture every moment with us.
            </h4>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
          <div className="bg-light-primary h-full w-1/2 mx-5 relative">
            <h5 className="absolute -bottom-3 w-full text-center font-lexend font-bold">
              AUDIO - VISUAL SUPPORT
            </h5>
          </div>
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 w-1/3 self-center" />
      </div>
    </div>
  );
};

export default BrowseOurWorksComponent;
