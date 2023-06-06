import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const BrowseOurWorksComponent = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="pb-14 mt-20">
      <h3 className="font-druk-wide text-2xl my-10 text-night text-center">
        Browse Our Works
      </h3>
      <div className="flex h-[80vh] px-32 py-5">
        <div className="px-5 justify-end h-full w-1/3">
          <div className="flex flex-col justify-end h-full">
            <div
              onClick={() => navigate("/our_works/live_event_streaming")}
              className="relative cursor-pointer bg-cover bg-center bg-sport-broadcast bg-no-repeat bg-fixed h-2/3"
            >
              <h5 className="absolute -top-7 font-bold w-full font-lexend">
                LIVE EVENT STREAMING
              </h5>
            </div>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
        <div className="px-5 h-full w-2/5">
          <div
            onClick={() => navigate("/our_works/wedding_films")}
            className="relative cursor-pointer bg-love-story bg-cover bg-center bg-no-repeat bg-fixed h-full"
          >
            <h5 className="absolute w-full text-light text-end right-5 bottom-3 font-bold font-lexend">
              WEDDING FILMS
            </h5>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
        <div className="px-5 justify-start h-full w-1/3">
          <div className="h-full">
            <div
              onClick={() => navigate("/our_works/documentary_filming")}
              className="relative cursor-pointer bg-power-shooter bg-cover bg-center bg-no-repeat bg-fixed h-2/3"
            >
              <h5 className="absolute w-full text-end -bottom-7 font-bold font-lexend">
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
            <h4 className="font-druk-wide w-[361px] text-lg mt-10 cursor-pointer text-night text-center">
              Don’t just capture a moment capture every moment with us.
            </h4>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
          <div
            onClick={() => navigate("/our_works/audio_-_visual_support")}
            className="bg-sharp-shooter cursor-pointer bg-cover bg-center bg-no-repeat bg-fixed h-full w-1/2 mx-5 relative"
          >
            <h5 className="absolute text-light bottom-2 w-full text-start left-3 font-lexend font-bold">
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
