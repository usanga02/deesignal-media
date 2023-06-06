import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

type Props = {};

const WorkDetailsHeader = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="px-16 mt-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600"
      >
        <TbArrowBackUp />
        <span>Back to Wedding Films</span>
      </button>

      <div>
        <h1 className="font-druk-wide leading-relaxed text-4xl w-[600px] mt-8 mb-5">
          IFEOLUWA & ADEBISI FEB 15th 2023
        </h1>

        <div className="flex justify-between gap-5 mt-14 items-center">
          <img
            src={require("../../assets/img/wedding/wedding1.png")}
            className="object-cover"
            alt=""
          />

          <img
            src={require("../../assets/img/wedding/wedding2.png")}
            className="object-cover"
            width={320}
            alt=""
          />

          <div className="-mt-[400px]">
            <img
              src={require("../../assets/img/wedding/wedding3.png")}
              width={450}
              className="object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsHeader;
