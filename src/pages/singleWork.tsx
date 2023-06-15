import React, { useState, useEffect } from "react";
import Navbar from "../components/basic/Navbar";
import MiddleNav from "../components/work/MiddleNav";
import WorkCards from "../components/work/WorkCards";
import Footer from "../components/major/Footer";
import Capture from "../components/work/Capture";
import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";
import { client } from "../services/client";
import Pagination from "../components/basic/Pagination";

const SingleWork = () => {
  const location = useLocation().pathname;
  const [currentPage, setCurrentPage] = useState(1);
  const [works, setWorks] = useState([]);

  const getCategory = () => {
    const match = location.match(/\/([^/]+)$/);
    if (match && match.length > 1) {
      return match[1]
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      return "";
    }
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "work" && category == "${getCategory()}"] {
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
      .then((data) => setWorks(data))
      .catch(console.error);
  }, []);

  function paginate() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 right-0"
    >
      <div className="h-[90vh] bg-night">
        <Navbar />

        <div className="h-full w-full flex justify-center">
          <h2 className="text-light font-druk-wide mt-44 font-[700] leading-relaxed text-xl md:text-5xl text-center">
            {location === "/our_works/live_event_streaming"
              ? "Live Event Streaming"
              : location === "/our_works/wedding_films"
              ? "Wedding Films"
              : location === "/our_works/documentary_films"
              ? "Documentary Films"
              : "Audio - Visual Support"}
          </h2>
        </div>
      </div>
      <div className="bg-light">
        <MiddleNav />

        <div className="flex justify-center md:px-16 px-5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-3 justify-items-center">
            {works.map((wedding, i) => (
              <WorkCards
                data={wedding}
                key={i}
                extraClass={i === 1 || i === 4 || i === 7 ? "mt-20" : "mt-5"}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Pagination
            currentPage={currentPage}
            onPageChange={paginate}
            totalPages={100}
          />
        </div>

        <div className="mt-20">
          <Capture />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </m.section>
  );
};

export default SingleWork;
