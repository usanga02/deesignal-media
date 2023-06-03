import ControlsButtons from "../basic/Controls";
import ClientComment from "../basic/ClientComment";

type Props = {};

const WhatOurClientsSay = (props: Props) => {
  return (
    <div className="bg-night bg-cover bg-center bg-no-repeat bg-fixed h-[570px] py-20 px-44 flex w-full justify-between">
      <div className="">
        <h3 className="text-light w-4/5 text-2xl font-druk-wide">
          What Our Clients Say About Us
        </h3>
        <ClientComment
          title="The service is worth more than the price and i love it"
          comment=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ean mmodo
        ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis dis
        parturienntes, nascetur ridiculus mus. Donec Aenean massa."
          name="Harrison Bolaji"
        />
      </div>
      <div>
        <div className="w-full flex justify-end">
          <ControlsButtons />
        </div>
        <ClientComment
          title="The service is worth more than the price and i love it"
          comment=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ean mmodo
        ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis dis
        parturienntes, nascetur ridiculus mus. Donec Aenean massa."
          name="Tonia Jonas"
        />
      </div>
    </div>
  );
};

export default WhatOurClientsSay;
