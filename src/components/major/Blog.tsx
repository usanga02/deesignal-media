import React from "react";
import BlogCard from "../basic/BlogCard";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="overflow-hidden h-screen pr-0 p-32 pt-24">
      <h3 className="font-druk-wide text-3xl">Blog</h3>
      <div className="relative w-full">
        <div className="absolute w-full overflow-x-scroll scrollbar scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-track-light-primary scrollbar-w-[10px] scrollbar-h-2  pt-5 pb-10 flex justify-between mt-10">
          <BlogCard extraClass=" mr-10" />
          <BlogCard extraClass=" mr-10" />
          <BlogCard extraClass=" mr-10" />
          <BlogCard extraClass=" mr-10" />
          <BlogCard extraClass="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
