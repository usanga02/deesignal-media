import React, { useState } from "react";
import Navbar from "../components/basic/Navbar";
import MiddleNav from "../components/work/MiddleNav";
import WorkCards from "../components/work/WorkCards";
import Footer from "../components/major/Footer";
import Capture from "../components/work/Capture";
import { Pagination } from "flowbite-react";

const SingleWork = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function paginate() {
    setCurrentPage(2);
  }

  return (
    <section>
      <div className="h-[90vh] bg-primary">
        <Navbar />

        <div className="h-full w-full flex justify-center">
          <h2 className="text-light font-druk-wide mt-44 font-[700] leading-relaxed text-5xl text-center">
            Life Event Streaming
          </h2>
        </div>
      </div>

      <MiddleNav />

      <div className="flex justify-center px-16 w-full">
        <div className="grid grid-cols-3 w-full gap-3 justify-items-center">
          <WorkCards />
          <WorkCards />
          <WorkCards />
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
    </section>
  );
};

export default SingleWork;
