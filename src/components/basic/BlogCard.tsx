import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  extraClass?: string;
};

const BlogCard = ({ extraClass }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = `${extraClass} max-w-[500px]`;

  return (
    <div className={classes} >

      <div className="bg-light-primary h-[247px]" />

      <h6 className="font-[500] text-[14px] my-5">WEDDINGS</h6>
      <h6 className="font-[400] text-[14px]">20. 04. 2023 - PRESS</h6>

      <p className="font-[500] text-[16px] mt-3">
        It was a blast at the wedding ceremony of the year as we can say at
        Deesignal Media, as we filmed and captured beautiful moments from the
        attendees of “Tayo&Ife2023” Happy Matrimony.
      </p>

      <p className="text-gray-500 mt-4 font-light text-sm tracking-wide">Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet
        dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes,
        nascetur sociis natnatibus et magnisrienntes, nascetur mmodo
        ligulaet dolor. Aenean maa. Cum Lorem ipsum dolor sit amet,
        consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa.
        Cum sociis natnatibus et magnis irturienntes, nascetur sociis
        natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor.
        Aenean maa. Cum...</p>

      <button className="mt-5 text-gray-600 underline" onClick={() => navigate("/blog/weddings")}>Read More</button>

    </div>
  );
};

export default BlogCard;
