import React from "react";
import { ReactComponent as Quotes } from "../../assets/svg/Quotes.svg";

type Props = {
  title: string;
  comment: string;
  name: string;
  image?: string;
  extraClass?: string;
};

const ClientComment = ({ title, comment, name, image, extraClass }: Props) => {
  return (
    <div className={extraClass}>
      <Quotes className="mx-auto lg:mx-0 lg:mt-[43px] mt-3" />
      <h4 className="text-light-primary font-[700] text-lg lg:w-[412px] mt-3 lg:mt-8">
        {title}
      </h4>
      <h6 className="text-light-primary lg:w-[460px] text-sm lg:text-base text-justify mt-4">
        {comment}
      </h6>
      <div className="flex items-center mb-3 lg:mb-0 mt-6">
        <img
          src={image}
          alt="client"
          className="h-14 w-14 rounded-full object-cover"
        />
        <h6 className="ml-5 text-light-primary font-bold">{name}</h6>
      </div>
    </div>
  );
};

export default ClientComment;
