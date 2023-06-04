import MenuNavbar from "../components/basic/MenuNavbar";
import MenuItems from "../components/basic/MenuItems";
import { motion as m } from "framer-motion";

type Props = {};

const Menu = (props: Props) => {
  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 right-0 h-screen bg-night md:p-32 p-5"
    >
      <MenuNavbar />
      <MenuItems />
    </m.div>
  );
};

export default Menu;
