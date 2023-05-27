import React from "react";

type Props = {
  label: string;
  extraClass?: string;
};

const Button = ({ label, extraClass }: Props) => {
  const classes =
    "bg-light-primary font-lexend text-dark px-8 h-12 text-2xl" + extraClass;
  return <button className={classes}>{label}</button>;
};

export default Button;
