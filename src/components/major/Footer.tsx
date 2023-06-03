import React, { useEffect } from "react";
import Button from "../variants/Button";
import HoverButton from "../variants/HoverButton";
import InputField from "../variants/InputField";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on location change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-night py-10 md:px-16 px-5 w-full">
      <div className="flex md:flex-row flex-col gap-3 justify-between w-full">
        <div className="md:w-2/5">
          <h5 className="font-druk-wide text-light text-2xl">Socials</h5>
          <div className="md:w-5/6 md:mt-10">
            <Button label="INSTAGRAM" extraClass="mr-3 px-6 mt-3" />
            <HoverButton extraClass="mr-3 mt-3" label="YOUTUBE" />
            <HoverButton extraClass="mr-3 mt-3" label="TWITTER" />
            <HoverButton extraClass="mr-3 mt-3 " label="FACEBOOK" />
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>

        <div className="flex flex-col md:w-3/5 md:items-end md:mt-0 mt-10">
          <h5 className="font-druk-wide text-light text-2xl">Our Works</h5>
          <div className="flex flex-wrap md:justify-end md:h-full w-full md:mt-10">
            <HoverButton extraClass="ml-3 mt-3" label="WEDDING FILMS" />
            <HoverButton extraClass="ml-3 mt-3" label="LIVE EVENT STREAMING" />
            <HoverButton extraClass="mt-3 ml-3" label="VISUAL..." />
            <Button label="DOCUMENTARY" extraClass="px-6 mt-3 ml-3" />
          </div>
          <hr className="text-light-primary w-full md:w-3/4 border-[1px] text-opacity-50 mt-5" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between mt-16 w-full">
        <div className="md:w-2/5">
          <h5 className="font-druk-wide text-light text-2xl">Contacts</h5>
          <div className="w-full md:mt-10 h-32">
            <Button label="SEND A MAIL" extraClass="mr-3 px-6 mt-3" />
            <InputField
              placeholder="Type in your email"
              value="INFO@DEESIGNALMEDIA.COM"
              extraClass="w-3/5"
              disabled
              name="subscribe"
            />
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>

        <div className="flex flex-col md:w-3/5 md:items-end md:mt-0 mt-10">
          <h5 className="font-druk-wide text-light text-2xl">Journals</h5>
          <div className="md:flex md:justify-end w-full h-32 md:mt-10">
            <InputField
              placeholder="Type in your email"
              name="subscribe"
              extraClass="mt-3"
            />
            <Button label="SUBSCRIBE" extraClass="ml-3 px-6 mt-3" />
          </div>
          <hr className="text-light-primary w-full border-[1px] text-opacity-50 mt-5" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col w-full mt-10 justify-between font-lexend text-light">
        <h3 className="text-xl font-druk-wide">DEESIGNAL MEDIA</h3>

        <h4>ALL RIGHTS RESERVED TO DEESIGNAL MEDIA 2023</h4>

        <ul className="md:flex hidden">
          <li className="border-r-[1px] px-6 border-light-primary border-opacity-50">
            Services
          </li>
          <li
            onClick={() => navigate("/our_works")}
            className="border-r-[1px] cursor-pointer px-6 border-light-primary border-opacity-50"
          >
            Works
          </li>
          <li className="pl-6">Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
