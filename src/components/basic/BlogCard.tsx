type Props = {
  extraClass?: string;
};

const BlogCard = ({ extraClass }: Props) => {
  const classes = `${extraClass} max-w-[500px]`;

  return (
    <div className={classes}>
      <div className="bg-light-primary h-[247px]" />

      <h6 className="font-[500] text-[14px] my-5">WEDDINGS</h6>
      <h6 className="font-[400] text-[14px]">20. 04. 2023 - PRESS</h6>

      <p className="font-[500] text-[16px] mt-3">
        It was a blast at the wedding ceremony of the year as we can say at
        Deesignal Media, as we filmed and captured beautiful moments from the
        attendees of “Tayo&Ife2023” Happy Matrimony.
      </p>
    </div>
  );
};

export default BlogCard;
