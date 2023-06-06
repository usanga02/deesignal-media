import NavbarDark from "../components/basic/NavbarDark";
import { motion as m } from "framer-motion";
import WorkDetailsHeader from "../components/major/WorkDetailsHeader";
import { useNavigate } from "react-router-dom";
import WorkInfo from "../components/work/WorkInfo";
import WorkGallery from "../components/work/WorkGallery";
import Capture from "../components/work/Capture";
import Footer from "../components/major/Footer";

type Props = {};

const WorkDetails = (props: Props) => {
  const navigate = useNavigate();

  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 bg-light right-0"
    >
      <div>
        <NavbarDark />
        <WorkDetailsHeader />
      </div>

      <div className="-mt-36">
        <WorkInfo />
      </div>

      <div className="px-16 mt-10">
        <WorkGallery />

        <div className="mt-10 flex justify-center">
          <a href="" target="_blank" className="underline text-center">
            SEE MORE ON INSTAGRAM
          </a>
        </div>
      </div>

      <div className="mt-10">
        <Capture />
      </div>

      <Footer />
    </m.section>
  );
};

export default WorkDetails;
