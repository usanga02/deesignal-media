import React from "react";

type Props = {
  label: string;
  extraClass?: string;
  href?: any;
};

const Link = ({ label, extraClass, href, ...rest }: Props) => {
  const classes = `border-[1px] font-[600] bg-light text-night font-lexend block w-fit cursor-pointer px-3 sm:px-6 py-1.5 sm:py-2.5 text-sm sm:text-base box-border ${extraClass}`;
  return (
    <a {...rest} href={href} target="_blank" className={classes}>
      {label}
    </a>
  );
};

export default Link;
