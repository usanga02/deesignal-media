import React from "react";

type Props = {
  label: string;
  extraClass?: string;
};

const HoverButton = ({ label, extraClass }: Props) => {
  const classes = `bg-transparent border-[1px] border-light-primary font-[600]
   hover:bg-light-primary hover:text-primary font-lexend text-light-primary px-6 h-12 text-md ${extraClass}`;
  return <button className={classes}>{label}</button>;
};

export default HoverButton;
