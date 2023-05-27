import React from "react";

type Props = {};

const SocialsNavbar = (props: Props) => {
  return (
    <div className="flex justify-between border-[1px] font-lexend font-[400] border-dark border-opacity-50 mx-32 mt-7 py-6 px-8">
      <div>
        <h3>Keep up with us on our socials</h3>
      </div>
      <ul className="flex justify-between w-1/3">
        <li className=" border-r-[1px] pr-8 border-dark border-opacity-50">
          Instagram
        </li>
        <li className=" border-r-[1px] pr-8 border-dark border-opacity-50">
          Youtube
        </li>
        <li className=" border-r-[1px] pr-8 border-dark border-opacity-50">
          Twitter
        </li>
        <li>Facebook</li>
      </ul>
    </div>
  );
};

export default SocialsNavbar;
