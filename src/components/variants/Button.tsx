import React from "react";

type Props = {
  label: string;
  extraClass?: string;
  onClick?: any;
};

const Button = ({ label, extraClass, onClick, ...rest }: Props) => {
  const classes = `bg-light-primary font-lexend font-[600] text-dark h-10 md:h-12 text-md ${extraClass}`;
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
