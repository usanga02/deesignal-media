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
  const classes = `border-[1px] border-light-primary py-6 px-8 text-md font-lexend placeholder-light-primary outline-none text-light-primary h-12 bg-primary ${extraClass}`;
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
