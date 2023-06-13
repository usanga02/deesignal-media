import React, { MouseEventHandler } from "react";

type Props = {
  label: string;
  extraClass?: string;
  onClick?: MouseEventHandler;
  variant?: string;
};

const Button = ({ label, extraClass, onClick, variant, ...rest }: Props) => {
  const classes =
    variant === "dark"
      ? `bg-night font-lexend font-[600] text-light px-3 sm:px-6 py-2 sm:py-2.5 md:h-12 text-sm lg:text-base ${extraClass}`
      : `bg-light font-lexend font-[600] text-dark px-3 sm:px-6 py-2 sm:py-2.5 md:h-12 text-sm lg:text-base ${extraClass}`;
  return (
    <button {...rest} onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default Button;
