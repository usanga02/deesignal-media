import { useNavigate, useParams } from "react-router-dom";
import NavbarDark from "../components/basic/NavbarDark";
import { BiChevronLeft } from "react-icons/bi";
import Footer from "../components/major/Footer";
import { motion as m } from "framer-motion";
import useAuth from "../hooks/useAuth";
import { IBlog } from "../@types/blog";

const SingleBlog = () => {
  const { blog } = useAuth() || {};
  // const params = useParams();
  const navigate = useNavigate();
  // const imgUrl: RegExpMatchArray = blog?.imgUrl?.match(/\/d\/([^/]+)\//)!;
  // const img = `https://drive.google.com/uc?export=view&id=${imgUrl[1]}`;
  // console.log(blog?.imgUrl?.asset?.url);
  // console.log(params.blogname);
  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 bg-light right-0"
    >
      <NavbarDark />

      <section className="px-8 md:px-32 mt-20">
        <div className="justify-center flex">
          <img
            src={blog?.imgUrl?.asset?.url}
            className="w-full h-[250px] md:h-[600px] object-cover"
            alt=""
          />
        </div>

        <section className="justify-center flex">
          <div className="content w-full">
            <h6 className="font-[300] text-base md:text-xl my-2 md:my-5">
              {blog?.title}
            </h6>
            <h6 className="font-[200] text-[14px]">
              {blog?.publishedAt?.split("T")[0]} - PRESS
            </h6>

            <p className="font-[500] text-base md:text-xl mt-1 md:mt-3">
              {blog?.subtitle}
            </p>

            <p className="text-gray-600 text-sm md:text-base text-justify mt-4 font-light tracking-wide">
              {blog?.body}
            </p>

            <button
              className="flex items-center gap-2 mt-5"
              onClick={() => navigate(-1)}
            >
              <BiChevronLeft />
              <span>Back to Blog</span>
            </button>
          </div>
        </section>
      </section>

      <div className="mt-20">
        <Footer />
      </div>
    </m.section>
  );
};

export default SingleBlog;
