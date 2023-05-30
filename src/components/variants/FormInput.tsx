import React from "react";

type Props = {
  name: string;
  label: string;
  extraClass?: string;
};

const FormInput = ({ name, label, extraClass }: Props) => {
  const classes = `font-lexend text-dark-text col-span-2 ${extraClass}`;
  return (
    <div className={classes}>
      <label htmlFor={name} className=" font-[200]">
        {label}
      </label>
      <input
        name={name}
        className="w-full border-[1px] mt-2 border-dark text-dark p-3 outline-none"
      />
    </div>
  );
};

export default FormInput;
