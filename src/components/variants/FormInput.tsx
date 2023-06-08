import React from "react";

type Props = {
  name: string;
  label: string;
  extraClass?: string;
  type?: string;
};

const FormInput = ({ name, label, extraClass, type }: Props) => {
  const classes = `font-lexend text-dark-text md:col-span-3 col-span-6 ${extraClass}`;
  return (
    <div className={classes}>
      <label htmlFor={name} className="font-[200] text-xs md:text-base">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full border-[1px] mt-2 focus:border-2 border-dark text-dark p-3 outline-none"
      />
    </div>
  );
};

export default FormInput;
