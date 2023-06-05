import React from "react";

type Props = {
  label: string;
  extraClass?: string;
  onClick?: any;
  variant?: string;
};

const Button = ({ label, extraClass, onClick, variant, ...rest }: Props) => {
  const classes =
    variant === "dark"
      ? `bg-night font-lexend font-[600] text-light h-10 md:h-12 text-md ${extraClass}`
      : `bg-light font-lexend font-[600] text-dark h-10 md:h-12 text-md ${extraClass}`;
  return (
    <button
      {...rest}
      onClick={onClick ? onClick : () => console.log("clicked")}
      className={classes}
    >
      {label}
    </button>
  );
};

export default Button;
