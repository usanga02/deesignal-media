import React from "react";

type Props = {};

const SocialsNavbar = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-center text-sm md:text-base lg:border-[#0000004D] lg:text-left lg:border-[1px] font-lexend font-[200] md:font-[400] border-opacity-50 mx-8 md:mx-32 mt-7 py-4 px-8">
      <div className="pb-4 lg:pb-0 border-b-2 lg:border-b-0 w-80">
        <h3>Keep up with us on our socials</h3>
      </div>
      <ul className="flex justify-between pt-4 lg:h-10 lg:pt-0">
        <li className=" border-r-2 lg:border-r-[1px] lg:py-2 pr-3 lg:border-[#0000004D] lg:pr-8 border-opacity-50">
          <a
            href="https://instagram.com/deesignalmedia?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li className=" border-r-2 lg:border-r-[1px] lg:py-2 px-3 lg:border-[#0000004D] lg:px-8 border-opacity-50">
          <a href="https://www.youtube.com/@deesignalmedia" target="_blank">
            Youtube
          </a>
        </li>
        <li className=" border-r-2 lg:border-r-[1px] lg:py-2 px-3 lg:border-[#0000004D] lg:px-8 border-opacity-50">
          <a href="https://twitter.com/Deesignal_sc" target="_blank">
            Twitter
          </a>
        </li>
        <li className="pl-3 lg:pl-8 lg:py-2">
          <a
            href="https://www.facebook.com/profile.php?id=100092455375711"
            target="_blank"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialsNavbar;
