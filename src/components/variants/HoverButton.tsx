import React from "react";

type Props = {
  label: string;
  extraClass?: string;
  onClick?: any;
};

const HoverButton = ({ label, extraClass, onClick }: Props) => {
  const classes = `bg-transparent border-[1px] border-light-primary font-[600] hover:bg-light hover:text-night font-lexend text-light-primary px-3 sm:px-6 py-1.5 sm:py-2.5 md:h-12 text-md ${extraClass}`;
  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default HoverButton;
