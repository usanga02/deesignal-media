import React from "react";

type Props = {};

const HeroParagraph = (props: Props) => {
  return (
    <div className="text-light-primary mt-14 md:mt-5 lg:ml-4 xl:ml-0 lg:mt-0 h-56 md:h-32 lg:h-56 w-[300px] sm:w-[360px] md:w-[480px] lg:w-[420px] text-justify flex flex-col justify-between font-lexend">
      <div className="md:text-lg text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet
        dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes,
        nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet
        dolor. Aenean maa. Cum
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 ">
        <div>Scroll Down</div>
        <div className="text-2xl">⇣</div>
      </div>
    </div>
  );
};

export default HeroParagraph;
