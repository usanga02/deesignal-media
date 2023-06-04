import { TfiClose } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

type Props = {};

const MenuNavbar = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-40 justify-between items-center">
      <img
        className="cursor-pointer md:w-[300px] w-[150px]"
        src="/Deesignal-logo.png"
        onClick={() => navigate("/")}
        alt="deesignal logo"
        
        
      />
      <ul className="md:flex hidden justify-between w-1/3 h-10 items-center text-light-primary font-[500] font-lexend">
        <li className="cursor-pointer p-4">Instagram</li>
        <hr className=" border-r-[1px] border-light-primary h-full border-opacity-50" />
        <li className="cursor-pointer p-4">Youtube</li>
        <hr className=" border-r-[1px] border-light-primary h-full border-opacity-50" />
        <li className="cursor-pointer p-4">Twitter</li>
        <hr className=" border-r-[1px] border-light-primary h-full border-opacity-50" />
        <li className="cursor-pointer p-4">Facebook</li>
      </ul>
      <div className="w-1/6 flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="p-8 hover:bg-light-primary hover:bg-opacity-10 rounded-full"
        >
          <TfiClose className="text-light-primary text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default MenuNavbar;
