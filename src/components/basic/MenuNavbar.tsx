import React from "react";
import { TfiClose } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const MenuNavbar = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-40 justify-between items-center">
      <img
        className="cursor-pointer"
        src="/Deesignal-logo.png"
        width={300}
        height={300}
      />
      <ul className="flex justify-between w-1/3 h-10 items-center text-light-primary font-[500] font-lexend">
        <li className="cursor-pointer p-4">Instagram</li>
        <hr className=" border-r-[1px] border-light-primary h-full border-opacity-50" />
        <li className="cursor-pointer p-4">Youtube</li>
        <hr className=" border-r-[1px] border-light-primary h-full border-opacity-50" />
        <li className="cursor-pointer p-4">Twitter</li>
        <hr className=" border-r-[1px] border-light-primary h-full border-opacity-50" />
        <li className="cursor-pointer p-4">Facebook</li>
      </ul>
      <div className="w-1/6 flex justify-end">
        <Link
          to="/"
          className="p-8 hover:bg-light-primary hover:bg-opacity-10 rounded-full"
        >
          <TfiClose className="text-light-primary text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default MenuNavbar;
