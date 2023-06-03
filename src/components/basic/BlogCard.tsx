import React from "react";

type Props = {
  extraClass?: string;
  bgImg?: string;
};

const BlogCard = ({ extraClass, bgImg }: Props) => {
  const classes = `w-[430px] h-[500px] flex flex-col justify-between ${extraClass}`;
  const imgClass = `h-[247px] w-[424px] ${bgImg}`;
  return (
    <div className={classes}>
      <div className={imgClass} />
      <h6 className="font-[600] text-xl">WEDDINGS</h6>
      <h6 className="font-[400] text-lg">20. 04. 2023 - PRESS</h6>
      <p className="font-[500] text-xl">
        It was a blast at the wedding ceremony of the year as we can say at
        Deesignal Media, as we filmed and captured beautiful moments from the
        attendees of “Tayo&Ife2023” Happy Matrimony.
      </p>
    </div>
  );
};

export default BlogCard;
