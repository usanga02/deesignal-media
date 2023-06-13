import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const BrowseOurWorksComponent = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="pb-14 mt-40 lg:mt-20">
      <h3 className="font-druk-wide text-base md:text-2xl my-10 text-night text-center">
        Browse Our Works
      </h3>

      <div className="flex md:flex-nowrap flex-wrap md:px-16 px-5 py-5">
        <div className="px-5 flex flex-col justify-end h-full lg:w-1/3 md:w-6/12 w-full">
          <div className="flex flex-col justify-end h-full">
            <div
              onClick={() => navigate("/our_works/live_event_streaming")}
              className="relative cursor-pointer bg-cover bg-center bg-sport-broadcast bg-no-repeat bg-fixed h-[300px]"
            >
              <h5 className="absolute -top-7 font-bold w-full font-lexend">
                LIVE EVENT STREAMING
              </h5>
            </div>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>
        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />

        <div className="px-5 h-full lg:w-2/5 md:w-6/12 w-full">
          <div
            onClick={() => navigate("/our_works/wedding_films")}
            className="relative cursor-pointer bg-love-story bg-cover bg-center bg-no-repeat mt-5 md:mt-0 bg-fixed h-[500px]"
          >
            <h5 className="absolute w-full text-light text-end right-5 bottom-3 font-bold font-lexend">
              WEDDING FILMS
            </h5>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>

        <hr className="text-light-primary border-[1px] text-opacity-50 h-full" />
        <div className="px-5 justify-start h-full md:w-1/3 w-full">
          <div className="h-full">
            <div
              onClick={() => navigate("/our_works/documentary_films")}
              className="relative cursor-pointer bg-power-shooter bg-cover bg-center bg-no-repeat mt-5 md:mt-0 bg-fixed h-[300px]"
            >
              <h5 className="absolute w-full text-end -bottom-7 font-bold font-lexend">
                DOCUMENTARY FILMS
              </h5>
            </div>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-10" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex md:flex-row flex-col md:px-16 px-5 mt-10 gap-5">
          <div>
            <h4 className="font-druk-wide md:w-[300px] text-lg mt-10 cursor-pointer text-night text-center">
              Don’t just capture a moment capture every moment with us.
            </h4>
          </div>

          <div>
            <div
              className="relative"
              onClick={() => navigate("/our_works/audio_-_visual_support")}
            >
              <img src={require("../../assets/img/sharp_shooter.png")} />
              <h5 className="absolute text-light bottom-2 w-full text-start left-3 font-lexend font-bold z-30">
                AUDIO - VISUAL SUPPORT
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <hr className="text-light-primary border-[1px] text-opacity-50 w-1/3 self-center" />
      </div>
    </div>
  );
};

export default BrowseOurWorksComponent;
