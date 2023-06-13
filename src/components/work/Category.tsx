import React from "react";

type Props = {
  heading: string;
  description: string;
  imgSrc: string;
};

const Category = ({ heading, description, imgSrc }: Props) => {
  return (
    <div className="flex md:flex-row flex-col gap-20 items-center">
      <img src={require(`../../assets/img/${imgSrc}`)} alt="" />

      <div>
        <h1 className="font-druk-wide text-[#00000099] text-2xl">{heading}</h1>

        <p className="mt-10 text-justify text-[#000000cc]">{description}</p>
      </div>
    </div>
  );
};

export default Category;
