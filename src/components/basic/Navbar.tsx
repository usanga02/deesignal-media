import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu-item.svg";
import Button from "../variants/Button";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-transparent h-40 font-lexend font-[400] flex justify-between items-center px-32 text-light-primary">
      <img
        className="cursor-pointer"
        src="/Deesignal-logo.png"
        width={300}
        height={300}
      />
      <div className="flex items-center">
        <Button extraClass="px-10" label="BOOK US" />
        <MenuIcon
          onClick={() => navigate("/menu")}
          style={{
            fill: "white",
            height: 70,
            width: 40,
            marginLeft: 32,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
