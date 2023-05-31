import { ReactComponent as MenuIcon } from "../../assets/svg/menu-item.svg";
import Button from "../variants/Button";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" bg-transparent h-32 md:h-40 font-lexend font-[400] flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 text-light-primary">
      <img
        className="cursor-pointer md:h-12 h-8"
        alt="deesignal-logo"
        src="/Deesignal-logo.png"
      />
      <div className="flex items-center">
        {location.pathname !== "/book_us" && (
          <Button
            extraClass="md:px-10 px-6 sm:block hidden"
            label="BOOK US"
            onClick={() => navigate("/book_us")}
          />
        )}
        <MenuIcon
          onClick={() => navigate("/menu")}
          className="cursor-pointer fill-light ml-5 h-8 md:h-10 w-8 md:w-10"
        />
      </div>
    </div>
  );
};

export default Navbar;
