import React from "react";

type Props = {};

const HeroParagraph = (props: Props) => {
  return (
    <div className="text-white mt-10 md:mt-0 w-[320px] sm:w-[360px] md:w-[480px] lg:w-[440px] text-justify flex flex-col justify-between font-lexend">
      <div className="">
        Deesignal Media is a leading media company specializing in video
        coverage, live streaming, and documentary creation. With a strong focus
        on capturing and conveying powerful stories through visual mediums,
        Deesignal Media has established itself as a trusted name in the media
        industry.
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 ">
        <div>Scroll Down</div>
        <div className="text-2xl">⇣</div>
      </div>
    </div>
  );
};

export default HeroParagraph;
