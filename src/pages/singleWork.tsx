import React, { useState } from "react";
import Navbar from "../components/basic/Navbar";
import MiddleNav from "../components/work/MiddleNav";
import WorkCards from "../components/work/WorkCards";
import Footer from "../components/major/Footer";
import Capture from "../components/work/Capture";
import { Pagination } from "flowbite-react";
import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";

const wedding_photos = [
  {
    name: "IFE & BISI",
    image: "wedding_1.png",
  },
  {
    name: "TOSIN & DAMI",
    image: "wedding_2.png",
  },
  {
    name: "NGOZI & HENRY",
    image: "wedding_3.png",
  },
  {
    name: "BLESSING & FUMBI",
    image: "wedding_4.png",
  },
  {
    name: "BIMPE & TOSIN",
    image: "wedding_5.png",
  },
  {
    name: "RUKEY & FELIX",
    image: "wedding_6.png",
  },
  {
    name: "VIVIAN & TOBI",
    image: "wedding_7.png",
  },
  {
    name: "TEMI & SAM",
    image: "wedding_8.png",
  },
  {
    name: "GIFT & NELSON",
    image: "wedding_9.png",
  },
];

const SingleWork = () => {
  const location = useLocation().pathname;
  const [currentPage, setCurrentPage] = useState(1);

  function paginate() {
    setCurrentPage(2);
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
          <h2 className="text-light font-druk-wide mt-44 font-[700] leading-relaxed text-5xl text-center">
            {location === "/our_works/live_event_streaming"
              ? "Live Event Streaming"
              : location === "/our_works/wedding_films"
              ? "Wedding Films"
              : location === "/our_works/documentary_filming"
              ? "Documentary Filming"
              : "Audio - Visual Support"}
          </h2>
        </div>
      </div>

      <MiddleNav />

      <div className="flex justify-center md:px-16 px-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-3 justify-items-center">
          {wedding_photos.map((wedding, i) => (
            <WorkCards
              data={wedding}
              extraClass={i === 1 || i === 4 || i === 7 ? "mt-20" : "mt-5"}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Pagination
          currentPage={currentPage}
          onPageChange={paginate}
          showIcons
          totalPages={100}
        />
      </div>

      <div className="mt-20">
        <Capture />
      </div>

      <div>
        <Footer />
      </div>
    </m.section>
  );
};

export default SingleWork;
