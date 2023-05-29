import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu-item.svg";
import { ReactComponent as Logo } from "../../assets/svg/Deesignal Logo SVG 8.svg";
import Button from "../variants/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-transparent h-40 font-lexend font-[400] flex justify-between items-center px-32 text-light-primary">
      <img
        onClick={() => navigate("/")}
        className="cursor-pointer"
        src="/Deesignal-logo.png"
        width={300}
        height={300}
      />
      <div className="flex items-center">
        <Button extraClass="px-10" label="BOOK US" />
        <MenuIcon
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
