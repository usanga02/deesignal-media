import React, { useState, useEffect } from "react";
import Navbar from "../components/basic/Navbar";
import Footer from "../components/major/Footer";
import BlogCard from "../components/basic/BlogCard";
import { Pagination, Spinner } from "flowbite-react";
import { motion as m } from "framer-motion";
import { AppService } from "../services/app.service";


const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogList, setBlogList] = useState(null)
  const appService = new AppService()

  function paginate() {
    setCurrentPage(2);
  }

  function isOdd(number: any) {
    return number % 2 !== 0;
  }

  useEffect(() => {
    const getAllBlogs = async () => {
      const response = await appService.getBlogs();

      if (response.status === 0) {
        console.log(response, "error message")
      } else {
        console.log(response)
      }

    }

    getAllBlogs()

  }, [])



  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full bg-light top-0 right-0"
    >
      <div className="h-[90vh] bg-night">
        <Navbar />

        <div className="h-full w-full flex justify-center">
          <h2 className="text-light font-druk-wide mt-44 font-[700] leading-relaxed text-5xl text-center">
            Blog
          </h2>
        </div>
      </div>

      <section className="lg:px-16 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-20 gap-y-10 justify-items-center">
          {["1", "1", "1", "1"].map((bloger, i) => (
            <>
              {isOdd(i) ? (
                <BlogCard
                  extraClass="mt-10"
                  key={i}
                  bgImg="bg-summer-time"
                  page="blog"
                />
              ) : (
                <BlogCard key={i} bgImg="bg-beach-cam" page="blog" />
              )}
            </>
          ))}

        </div>
      </section>

      <div className="flex justify-center mt-10">
        <Pagination
          currentPage={currentPage}
          onPageChange={paginate}
          showIcons
          totalPages={100}
        />
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </m.section>
  );
};

export default Blog;
