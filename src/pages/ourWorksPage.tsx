import React from "react";
import Footer from "../components/major/Footer";
import Navbar from "../components/basic/Navbar";
import OurWorksHeader from "../components/major/OurWorksHeader";
import BrowseOurWorks from "../components/major/BrowseOurWorks";
import { motion as m } from "framer-motion";

type Props = {};

const OurWorksPage = (props: Props) => {
  return (
    <m.div
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 right-0"
    >
      <div className="h-screen bg-primary">
        <Navbar />
        <OurWorksHeader />
      </div>
      <div>
        <BrowseOurWorks />
        <Footer />
      </div>
    </m.div>
  );
};

export default OurWorksPage;
