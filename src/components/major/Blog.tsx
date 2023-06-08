import React, { useEffect, useState } from "react";
import BlogCard from "../basic/BlogCard";
import { AppService } from "../../services/app.service";

type Props = {};

const Blog = (props: Props) => {
  const appService = new AppService();
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      const response = await appService.getBlogs();

      if (response.status === 0) {
        console.log(response, "error message");
      } else {
        setBlogList(response);
      }
    };

    getAllBlogs();
  }, []);

  return (
    <div className="overflow-hidden h-screen pr-0 p-32 pt-24">
      <h3 className="font-druk-wide text-3xl">Blog</h3>
      <div className="relative w-full">
        <div className="absolute w-full overflow-x-auto scrollbar scrollbar-thumb-night scrollbar-track-light-primary scrollbar-w-[10px] scrollbar-h-2  pt-5 pb-10 flex justify-between mt-10">
          {blogList.map((blog, i) => (
            <BlogCard data={blog} extraClass="w-[350px] mr-10" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
