import NavbarDark from "../components/basic/NavbarDark";
import { motion as m } from "framer-motion";
import WorkDetailsHeader from "../components/major/WorkDetailsHeader";

type Props = {};

const WorkDetails = (props: Props) => {
  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 bg-light right-0"
    >
      <div className="h-[1200px]">
        <NavbarDark />
        <WorkDetailsHeader />
      </div>
    </m.section>
  );
};

export default WorkDetails;
