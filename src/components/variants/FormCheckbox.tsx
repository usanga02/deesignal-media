import React from "react";

type Props = {
  label: string;
  name: string;
};

const FormCheckbox = ({ label, name }: Props) => {
  return (
    <div>
      <div className="flex items-center ">
        <input
          id={name}
          type="checkbox"
          value=""
          name={name}
          className="w-5 h-5 text-dark-text bg-light border-primary border-[1px] focus:ring-primary focus:ring-1"
        />
        <label
          htmlFor={name}
          className="w-full py-2 ml-4 font-lexend text-primary"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormCheckbox;
