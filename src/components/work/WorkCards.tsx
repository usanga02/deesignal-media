import React from "react";
import { useLocation, useNavigate } from "react-router";

type Props = {
  data: any;
  extraClass?: string;
};
const WorkCards = ({ data, extraClass }: Props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const classes = `md:max-w-[350px] bg-transparent w-full ${extraClass}`;
  return (
    <div className={classes}>
      <div
        onClick={() => {
          navigate(`${location}/${data?.title?.replaceAll(" ", "-")}`);
        }}
        className=" cursor-pointer"
      >
        <div className="h-[400px]">
          <img
            src={data?.imgUrl?.asset?.url}
            width={350}
            alt="drive image"
            className="h-[475px] object-cover object-center"
          />
        </div>

        <div className="flex justify-center">
          <div className="border bg-[#fff] border-[#000000b3] p-3 w-[70%] mt-12">
            <p className="text-center text-[000000b3]">{data.title}</p>
          </div>
        </div>
      </div>

      <div className="border border-[#f0efef] mt-4 mx-10"></div>
    </div>
  );
};

export default WorkCards;
