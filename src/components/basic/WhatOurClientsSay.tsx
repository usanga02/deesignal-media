import React from "react";
import { ReactComponent as Quotes } from "../../assets/images/Quotes.svg";
import ControlsButtons from "./Controls";

type Props = {};

const WhatOurClientsSay = (props: Props) => {
  return (
    <div className="bg-primary h-[570px] py-20 px-44 flex w-full justify-between">
      <div className="">
        <h3 className="text-light-primary w-4/5 text-2xl font-druk-wide">
          What Our Clients Say About Us
        </h3>
        <Quotes className="mt-[43px]" />
        <h4 className="text-light-primary font-[500] text-2xl w-[412px] mt-8">
          The service is worth more than the price and i love it
        </h4>
        <h6 className="text-light-primary w-[460px] text-justify mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ean mmodo
          ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis dis
          parturienntes, nascetur ridiculus mus. Donec Aenean massa.
        </h6>
        <div className="flex items-center  mt-6">
          <div className="h-12 w-12 rounded-full bg-light-primary"></div>
          <h6 className="ml-5 text-light-primary font-bold">Harrison Bolaji</h6>
        </div>
      </div>
      <div>
        <div>
          <ControlsButtons />
        </div>
        <Quotes className="mt-[43px]" />
        <h4 className="text-light-primary font-[500] text-2xl w-[412px] mt-8">
          The service is worth more than the price and i love it
        </h4>
        <h6 className="text-light-primary w-[460px] text-justify mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ean mmodo
          ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis dis
          parturienntes, nascetur ridiculus mus. Donec Aenean massa.
        </h6>
        <div className="flex items-center  mt-6">
          <div className="h-12 w-12 rounded-full bg-light-primary"></div>
          <h6 className="ml-5 text-light-primary font-bold">Tonia Jonas</h6>
        </div>
      </div>
    </div>
  );
};

export default WhatOurClientsSay;
