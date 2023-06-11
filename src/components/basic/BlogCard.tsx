import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

type Props = {
  extraClass?: string;
  page?: string;
  data?: any;
};

const BlogCard = ({ extraClass, data, page }: Props) => {
  const { setBlog } = useAuth() || {};
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const height = location == "/" ? "h-[247px]" : "h-[400px]";
  // const img = `https://drive.google.com/uc?export=view&id=${data.imgUrl.match(/\/d\/([^/]+)\//)[1]
  //   }`;

  function shortenParagraph(paragraph: string) {
    const words = paragraph.split(" ");
    if (words.length <= 100) {
      return paragraph;
    } else {
      const shortenedWords = words.slice(0, 100);
      const shortenedParagraph = shortenedWords.join(" ");
      return shortenedParagraph;
    }
  }

  const shortenedParagraph = shortenParagraph(data.body);

  const classes = `${extraClass}`;
  const imgClass = `${height} object-cover object-center`;
  return (
    <div className={classes}>
      <img
        src={data?.imgUrl?.asset?.url}
        width={location === "/blog" ? 800 : 600}
        alt="drive image"
        className={imgClass}
      />
      <h6 className="font-[500] text-[14px] my-2 uppercase">
        {data && data.title}
      </h6>
      <h6 className="font-[400] text-[14px]">20. 04. 2023 - PRESS</h6>

      <p className="font-[500] text-[16px] mt-2">{data && data.subtitle}</p>

      {page === "blog" && (
        <p className="text-gray-500 mt-4 font-light text-sm tracking-wide">
          {shortenedParagraph}
        </p>
      )}

      <button
        className="mt-5 text-gray-600 underline"
        onClick={() => {
          setBlog(data);
          navigate(`/blog/${data.title.replaceAll(" ", "-")}`);
        }}
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
