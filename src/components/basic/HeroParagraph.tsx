import React from "react";

type Props = {};

const HeroParagraph = (props: Props) => {
  return (
    <div className="text-light-primary h-56 w-1/3 text-justify flex flex-col justify-between font-lexend">
      <div className="text-lg">
        Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet
        dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes,
        nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet
        dolor. Aenean maa. Cum
      </div>
      <div className="flex justify-between p">
        <div>Scroll Down</div>
        <div className="text-2xl">⇣</div>
      </div>
    </div>
  );
};

export default HeroParagraph;
