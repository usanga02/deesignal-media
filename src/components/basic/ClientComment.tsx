import React from "react";
import { ReactComponent as Quotes } from "../../assets/svg/Quotes.svg";

type Props = {
  title: string;
  comment: string;
  name: string;
  image?: string;
};

const ClientComment = ({ title, comment, name, image }: Props) => {
  return (
    <div>
      <Quotes className="mt-[43px]" />
      <h4 className="text-light-primary font-[500] text-2xl w-[412px] mt-8">
        {title}
      </h4>
      <h6 className="text-light-primary w-[460px] text-justify mt-4">
        {comment}
      </h6>
      <div className="flex items-center  mt-6">
        <div className="h-14 w-14 rounded-full bg-light-primary"></div>
        <h6 className="ml-5 text-light-primary font-bold">{name}</h6>
      </div>
    </div>
  );
};

export default ClientComment;
