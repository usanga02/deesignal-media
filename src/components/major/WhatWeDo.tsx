import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const WhatWeDo = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="relative mx-auto mt-20 px-5 md:px-16 ">
      <section className="flex w-full md:flex-row flex-col gap-5 items-center">
        <div className="w-6/12">
          <h2 className=" font-druk-wide text-night text-center md:text-left text-lg lg:text-3xl mb-8">
            What we do at Deesignal Media
          </h2>
          <h5 className="text-justify text-sm lg:text-xl text-primary">
            Deesignal Media is a leading media company specializing in video
            coverage, live streaming, and documentary creation. With a strong
            focus on capturing and conveying powerful stories through visual
            mediums, Deesignal Media has established itself as a trusted name in
            the media industry. The company's commitment to excellence,
            innovation, and professionalism sets it apart and ensures that clients
            receive exceptional services tailored to their unique needs.
          </h5>
          <button
            onClick={() => navigate("/whatwedo")}
            className="underline lg:mx-0 font-lexend my-10 text-lg"
          >
            FIND OUT MORE
          </button>
        </div>

        <div className="w-6/12">
          <img src={require("../../assets/img/whatwedoimg.png")} className="w-full" alt="" />
        </div>
      </section>

      <ul className="flex justify-around border mt-4 md:flex-nowrap flex-wrap">
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
  );
};

export default WhatWeDo;
