import { ReactComponent as MenuIcon } from "../../assets/svg/menu-item.svg";
import Button from "../variants/Button";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className=" bg-transparent h-20 md:h-40 font-lexend font-[400] flex justify-between items-center px-8 md:px-16 lg:px-32 text-light-primary">
      <img
        className="cursor-pointer md:h-12 h-7"
        alt="deesignal-logo"
        src="/Deesignal-logo.png"
      />
      <div className="flex items-center">
        {location.pathname !== "/book_us" && (
          <Button
            extraClass="px-10 md:block hidden"
            label="BOOK US"
            onClick={() => navigate("/book_us")}
          />
        )}
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
