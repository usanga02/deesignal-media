import React from "react";
import BookUsHeader from "../components/major/BookUsHeader";
import Navbar from "../components/basic/Navbar";
import { AnimatePresence, motion as m } from "framer-motion";
import BookUsDetails from "../components/major/BookUsDetails";
import BookUsForm from "../components/major/BookUsForm";
import Footer from "../components/major/Footer";

type Props = {};

const BookUs = (props: Props) => {
  return (
    <m.div
      initial={{ y: "29%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 right-0"
    >
      <div className="h-[720px] bg-primary">
        <Navbar />
        <BookUsHeader />
      </div>
      <div className="bg-light p-24 pt-0">
        <BookUsDetails />
        <BookUsForm />
      </div>
      <Footer />
    </m.div>
  );
};

export default BookUs;
