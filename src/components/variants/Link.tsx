import React from "react";

type Props = {
  label: string;
  extraClass?: string;
  href?: any;
};

const Link = ({ label, extraClass, href, ...rest }: Props) => {
  const classes = `border-[1px] font-[600] bg-light text-night font-lexend cursor-pointer px-6 py-3.5 text-md box-border ${extraClass}`;
  return (
    <a {...rest} href={href} target="_blank" className={classes}>
      {label}
    </a>
  );
};

export default Link;
