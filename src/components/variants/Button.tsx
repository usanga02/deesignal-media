import React from "react";

type Props = {
  label: string;
  extraClass?: string;
};

const Button = ({ label, extraClass }: Props) => {
  return (
    <button className="bg-light-primary font-lexend text-dark px-8 h-14 text-2xl">
      {label}
    </button>
  );
};

export default Button;
