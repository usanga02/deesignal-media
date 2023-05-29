import React from "react";

type Props = {};

const MenuNavbar = (props: Props) => {
  return (
    <div>
      <img
        className="cursor-pointer"
        src="/Deesignal-logo.png"
        width={300}
        height={300}
      />
      <ul>
        <li>Instagram</li>
        <li>Youtube</li>
        <li>Twitter</li>
        <li>Facebook</li>
      </ul>
    </div>
  );
};

export default MenuNavbar;
