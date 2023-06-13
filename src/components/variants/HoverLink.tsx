import React from "react";

type Props = {
  label: string;
  extraClass?: string;
  href?: any;
};

const HoverLink = ({ label, extraClass, href, ...rest }: Props) => {
  const classes = `bg-transparent border-[1px] border-light-primary block w-fit font-[600] hover:bg-light hover:text-night font-lexend text-sm sm:text-base text-light-primary px-3 sm:px-6 py-1.5 sm:py-2.5 cursor-pointer text-md box-border ${extraClass}`;
  return (
    <a {...rest} href={href} target="_blank" className={classes}>
      {label}
    </a>
  );
};

export default HoverLink;
