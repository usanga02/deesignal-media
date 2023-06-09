import React from "react";

type Props = {
  placeholder: string;
  name: string;
  extraClass?: string;
  value?: string;
  disabled?: boolean;
};

const InputField = ({
  name,
  placeholder,
  disabled,
  extraClass,
  value,
}: Props) => {
  const classes = `border-[1px] border-light-primary lg:py-6 lg:px-8 text-md font-lexend placeholder-light-primary outline-none text-sm lg:text-base text-light-primary md:h-12 bg-transparent ${extraClass}`;
  return (
    <input
      value={value}
      disabled={disabled}
      className={classes}
      type="text"
      name={name}
      placeholder={placeholder}
    />
  );
};

export default InputField;
