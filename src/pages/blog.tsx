import { useState, useEffect } from "react";
import Navbar from "../components/basic/Navbar";
import Footer from "../components/major/Footer";
import BlogCard from "../components/basic/BlogCard";
// import { Pagination } from "flowbite-react";
import { motion as m } from "framer-motion";
import { AppService } from "../services/app.service";
import { client } from "../services/client";
import Pagination from "../components/basic/Pagination";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const appService = new AppService();

  function paginate() {
    setCurrentPage(currentPage + 1);
  }

  function isOdd(number: any) {
    return number % 2 !== 0;
  }

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"] {
      title,
      subtitle,
      body,
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
      .then((data) => setBlogList(data))
      .catch(console.error);
    // const getAllBlogs = async () => {
    //   const response = await appService.getBlogs();

    //   if (response.status === 0) {
    //     console.log(response, "error message");
    //   } else {
    //     console.log(response)
    //     setBlogList(response);
    //   }
    // };
    // getAllBlogs();
  }, []);
  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full bg-light top-0 right-0"
    >
      <div className="h-screen bg-night">
        <Navbar />

        <div className="h-full w-full flex justify-center">
          <h2 className="text-light font-druk-wide mt-44 font-[700] leading-relaxed text-xl md:text-5xl text-center">
            Blog
          </h2>
        </div>
      </div>

      <section className="lg:px-16 px-5 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-20 gap-y-10 justify-items-center">
          {blogList &&
            blogList.map((blog, i) => (
              <>
                {isOdd(i) ? (
                  <BlogCard
                    extraClass="mt-10"
                    key={i}
                    data={blog}
                    page="blog"
                  />
                ) : (
                  <BlogCard data={blog} key={i} page="blog" />
                )}
              </>
            ))}
        </div>
      </section>

      <div className="flex justify-center mt-10">
        <Pagination
          currentPage={currentPage}
          onPageChange={paginate}
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
