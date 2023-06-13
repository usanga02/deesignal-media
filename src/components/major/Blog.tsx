import React, { useEffect, useState } from "react";
import BlogCard from "../basic/BlogCard";
import { AppService } from "../../services/app.service";
import { client } from "../../services/client";

type Props = {};

const Blog = (props: Props) => {
  const appService = new AppService();
  const [blogList, setBlogList] = useState([]);

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
    //     setBlogList(response);
    //   }
    // };

    // getAllBlogs();
  }, []);

  return (
    <div className="overflow-hidden h-screen pr-0 p-5 md:p-32 md:pt-24">
      <h3 className="font-druk-wide text-3xl">Blog</h3>
      <div className="relative w-full">
        <div className="absolute w-full overflow-x-auto scrollbar scrollbar-thumb-night scrollbar-track-light-primary scrollbar-w-[10px] scrollbar-h-2  pt-5 pb-10 flex justify-between mt-10">
          {blogList.map((blog, i) => (
            <BlogCard
              data={blog}
              extraClass="flex flex-col min-w-[424px] mr-10"
            />
          ))}
          {/* {blogList.map((blog, i) => (
            <BlogCard data={blog} extraClass=" mr-10  min-w-[424px]" />
          ))}
          {blogList.map((blog, i) => (
            <BlogCard data={blog} extraClass=" mr-10  min-w-[424px]" />
          ))}
          {blogList.map((blog, i) => (
            <BlogCard data={blog} extraClass=" mr-10  min-w-[424px]" />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
