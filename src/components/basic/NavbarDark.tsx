import { useEffect, useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/svg/dark-menu.svg";
import Button from "../variants/Button";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const NavbarDark = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className=" bg-transparent font-lexend font-[400] flex justify-between items-center md:px-16 px-5 text-[#000]">
      <img
        className="cursor-pointer"
        src="/Deesignal-logo-dark.png"
        width={300}
        height={300}
      />
      <div className="flex items-center">
        {location.pathname !== "/book_us" && (
          <Button
            extraClass="px-10"
            label="BOOK US"
            onClick={() => navigate("/book_us")}
          />
        )}
        <MenuIcon
          onClick={() => navigate("/menu")}
          style={{
            fill: "black",
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

export default NavbarDark;
