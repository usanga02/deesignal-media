import React from "react";

type Props = {
  label: string;
  name: string;
};

const FormTextArea = ({ name, label }: Props) => {
  return (
    <div className="font-[200] text-dark-text font-lexend">
      <label htmlFor="message">{label}</label>
      <textarea
        name={name}
        rows={6}
        className="p-3 w-full border-[1px] focus:ring-primary focus:border-primary mt-2 border-primary"
      ></textarea>
    </div>
  );
};

export default FormTextArea;
