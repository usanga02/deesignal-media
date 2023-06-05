import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  extraClass?: string;
  bgImg?: string;
  page?: string;
};

const BlogCard = ({ extraClass, bgImg, page }: Props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const height = location == "/" ? "h-[247px]" : "h-[400px]";

  const classes = `${extraClass}`;
  const imgClass = `${height} bg-cover ${bgImg}`;
  return (
    <div className={classes}>
      <div className={imgClass} />
      <h6 className="font-[500] text-[14px] my-2">WEDDINGS</h6>
      <h6 className="font-[400] text-[14px]">20. 04. 2023 - PRESS</h6>

      <p className="font-[500] text-[16px] mt-2">
        It was a blast at the wedding ceremony of the year as we can say at
        Deesignal Media, as we filmed and captured beautiful moments from the
        attendees of “Tayo&Ife2023” Happy Matrimony.
      </p>

      {page === "blog" && (
        <p className="text-gray-500 mt-4 font-light text-sm tracking-wide">
          Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet
          dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes,
          nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet
          dolor. Aenean maa. Cum Lorem ipsum dolor sit amet, consectetpiscing
          elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et
          magnis irturienntes, nascetur sociis natnatibus et magnisrienntes,
          nascetur mmodo ligulaet dolor. Aenean maa. Cum...
        </p>
      )}

      <button
        className="mt-5 text-gray-600 underline"
        onClick={() => navigate("/blog/weddings")}
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
