import React from "react";

type Props = {
  label: string;
  extraClass?: string;
};

const Button = ({ label, extraClass }: Props) => {
  const classes = `bg-light-primary font-lexend font-[600] text-dark h-12 text-md ${extraClass}`;
  return <button className={classes}>{label}</button>;
};

export default Button;
