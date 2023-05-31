import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const MenuItems = (props: Props) => {
  return (
    <div>
      <hr className="w-12 h-[1px] text-light-primary" />
      <ul className="font-lexend font-[700] text-light text-5xl flex flex-col justify-between py-8 h-80">
        <li className="cursor-pointer">
          <Link to="/our_works" className=" hover:border-b-4 border-dark-text">
            Our Works
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/whatwedo" className=" hover:border-b-4 border-dark-text">
            What We Do
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/blog" className=" hover:border-b-4 border-dark-text">
            Blog
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/book_us" className=" hover:border-b-4 border-dark-text">
            Book Us
          </Link>
        </li>
      </ul>
      <hr className="w-12 h-[1px] text-light-primary" />
    </div>
  );
};

export default MenuItems;
