import React from "react";

type Props = {
  data: any;
  extraClass?: string;
};
const WorkCards = ({ data, extraClass }: Props) => {
  const classes = `md:max-w-[350px] bg-transparent w-full ${extraClass}`;
  return (
    <div className={classes}>
      <div className="h-[400px]">
        <img
          src={require(`../../assets/img/wedding/${data.image}`)}
          className="h-fit"
          alt=""
        />
      </div>

      <div className="flex justify-center">
        <div className="border bg-[#fff] border-[#000000b3] p-3 w-[70%] mt-12">
          <p className="text-center text-[000000b3]">{data.name}</p>
        </div>
      </div>

      <div className="border border-[#f0efef] mt-4 mx-10"></div>
    </div>
  );
};

export default WorkCards;
