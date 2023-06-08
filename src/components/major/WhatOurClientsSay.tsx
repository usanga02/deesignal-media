import ControlsButtons from "../basic/Controls";
import ClientComment from "../basic/ClientComment";

type Props = {};

const WhatOurClientsSay = (props: Props) => {
  return (
    <div className="bg-night bg-cover bg-center bg-no-repeat bg-fixed h-[570px] py-16 md:px-16 px-5 w-full">

      <div className="flex justify-between">
        <h3 className="text-light w-4/5 text-2xl leading-tight font-druk-wide">
          What Our Clients Say About Us
        </h3>

        <div className="w-full flex justify-end">
          <ControlsButtons />
        </div>

      </div>
      <div className="flex justify-around overflow-x-auto">
        <ClientComment
          title="The service is worth more than the price and i love it"
          comment=" It is a great pleasure engaging Deesignal to capture our 30th
          Anniversary, they made it so memorable for us. The Diaspora people were so happy that they could be part of the event live,
          picture quality was excellent, and their contributions to the event was outstanding."
          name="Gbemisola"
          image={require("../../assets/img/commenters/client2.png")}
        />
        <ClientComment
          title="Our guests, they said it was like a movie."
          comment="My mum can't stop watching our wedding video over and over again.
          Every amazing moment was captured (even some that I didn't expect to see). It's
          beautiful to be able to watch the entire event of one of my most memorable days."
          name="Jefftah"
          image={require("../../assets/img/commenters/client1.png")}
        />
      </div>

    </div>
  );
};

export default WhatOurClientsSay;
