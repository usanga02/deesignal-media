import NavbarDark from "../components/basic/NavbarDark";
import { motion as m } from "framer-motion";
import WorkDetailsHeader from "../components/major/WorkDetailsHeader";
import { useNavigate } from "react-router-dom";
import WorkInfo from "../components/work/WorkInfo";
import WorkGallery from "../components/work/WorkGallery";
import Capture from "../components/work/Capture";
import Footer from "../components/major/Footer";
import useAuth from "../hooks/useAuth";

type Props = {};

const WorkDetails = (props: Props) => {
  const { work } = useAuth() || {};
  const navigate = useNavigate();
  const {
    title,
    imgUrl: {
      asset: { url },
    },
    gallery,
    category,
    whatwedid,
    whatweused,
    outcome,
    note,
    videoUrl,
  } = work!;

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
        <WorkDetailsHeader
          videoUrl={videoUrl}
          title={title}
          imgUrl={url}
          gallery={gallery}
        />
      </div>

      <div className="-mt-36">
        <WorkInfo
          whatwedid={whatwedid}
          whatweused={whatweused}
          outcome={outcome}
          note={note}
        />
      </div>

      <div className="px-16 mt-10">
        <WorkGallery gallery={gallery} />

        <div className="mt-10 flex justify-center">
          <a
            href="https://instagram.com/deesignalmedia?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            className="underline text-center"
          >
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
