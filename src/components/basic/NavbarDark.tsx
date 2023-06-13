import { useEffect, useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/svg/dark-menu.svg";
import Button from "../variants/Button";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const NavbarDark = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className=" bg-transparent font-lexend font-[400] mt-10 flex justify-between items-center md:px-16 px-8 text-[#000]">
      <img
        className="cursor-pointer  md:h-12 h-8"
        src="/Deesignal-logo-colored.png"
        onClick={() => navigate("/")}
      />
      <div className="flex items-center">
        {location.pathname !== "/book_us" && (
          <Button
            extraClass="hidden md:flex px-10"
            label="BOOK US"
            variant="dark"
            onClick={() => navigate("/book_us")}
          />
        )}
        <MenuIcon
          onClick={() => navigate("/menu")}
          className="ml-5 h-8 md:h-10 w-8 md:w-10 fill-dark"
        />
      </div>
    </div>
  );
};

export default NavbarDark;
