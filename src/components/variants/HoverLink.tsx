import React from "react";

type Props = {
  label: string;
  extraClass?: string;
  href?: any;
};

const HoverLink = ({ label, extraClass, href, ...rest }: Props) => {
  const classes = `bg-transparent border-[1px] border-light-primary font-[600] hover:bg-light hover:text-night font-lexend text-light-primary px-6 py-3.5 cursor-pointer text-md box-border ${extraClass}`;
  return (
    <a {...rest} href={href} target="_blank" className={classes}>
      {label}
    </a>
  );
};

export default HoverLink;
