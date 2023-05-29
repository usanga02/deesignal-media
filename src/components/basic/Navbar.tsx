import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu-item.svg";
import Button from "../variants/Button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className=" bg-transparent h-20 font-lexend font-[400] flex justify-between items-center px-16 text-light-primary">
      <div>logo</div>
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
