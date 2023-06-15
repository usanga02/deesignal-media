import NavbarDark from "../components/basic/NavbarDark";
import { motion as m } from "framer-motion";
import WorkDetailsHeader from "../components/major/WorkDetailsHeader";
import { useNavigate, useParams } from "react-router-dom";
import WorkInfo from "../components/work/WorkInfo";
import WorkGallery from "../components/work/WorkGallery";
import Capture from "../components/work/Capture";
import Footer from "../components/major/Footer";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { client } from "../services/client";
import { IWork } from "../@types/blog";

type Props = {};

const WorkDetails = (props: Props) => {
  // const { work } = useAuth() || {};
  const [work, setWork] = useState<IWork | null>({
    title: "",
    imgUrl: {
      asset: {
        url: "",
      },
    },
    publishedAt: "",
    gallery: [""],
    category: "",
    whatwedid: "",
    whatweused: "",
    outcome: "",
    note: "",
    videoUrl: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "work" && title == "${params?.workname?.replaceAll(
          "-",
          " "
        )}"] {
          title,
          category,
          videoUrl,
          note,
          whatwedid,
          whatweused,
          outcome,
          gallery,
          publishedAt,
          imgUrl {
            asset -> {
              _id,
              url
            },
            alt,
          },
        } | order(publishedAt desc)`
      )
      .then((data) => setWork(data[0]))
      .catch(console.error);
  }, []);

  const {
    title,
    imgUrl,
    gallery,
    category,
    whatwedid,
    whatweused,
    outcome,
    note,
    videoUrl,
  } = work || {};

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
          title={title!}
          imgUrl={imgUrl?.asset?.url}
          gallery={gallery!}
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

      <div className="px-8 md:px-16 mt-10 md:mt-14">
        <WorkGallery gallery={gallery!} />

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
