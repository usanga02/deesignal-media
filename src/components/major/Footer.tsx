import React, { useEffect } from "react";
import Button from "../variants/Button";
import HoverButton from "../variants/HoverButton";
import InputField from "../variants/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import HoverLink from "../variants/HoverLink";
import Link from "../variants/Link";

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
            <div className="pb-5 pt-6">
              <Link
                href="https://instagram.com/deesignalmedia?igshid=NTc4MTIwNjQ2YQ=="
                label="INSTAGRAM"
                extraClass="mr-3 px-6 mt-3"
              />
              <HoverLink
                href="https://www.linkedin.com/company/deesignal-media/"
                extraClass="mr-3 mt-3"
                label="LINKEDIN"
              />
              <HoverLink
                href="https://twitter.com/Deesignal_sc"
                extraClass="mr-3 mt-3"
                label="TWITTER"
              />
            </div>
            <div className="pt-5 pb-3">
              <HoverLink
                href="https://www.facebook.com/profile.php?id=100092455375711"
                extraClass="mr-3 mt-3 "
                label="FACEBOOK"
              />
            </div>
          </div>
          <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
        </div>

        <div className="flex flex-col md:w-3/5 md:items-end md:mt-0 mt-10">
          <h5 className="font-druk-wide text-light text-2xl">Our Works</h5>
          <div className="flex flex-wrap md:justify-end md:h-full w-full md:mt-10">
            <HoverButton
              onClick={() => navigate("/our_works/wedding_films")}
              extraClass="ml-3 mt-3"
              label="WEDDING FILMS"
            />
            <HoverButton
              onClick={() => navigate("/our_works/live_event_streaming")}
              extraClass="ml-3 mt-3"
              label="LIVE EVENT STREAMING"
            />
            <HoverButton
              onClick={() => navigate("/our_works/audio_-_visual_support")}
              extraClass="mt-3 ml-3"
              label="VISUAL..."
            />
            <Button
              onClick={() => navigate("/our_works/documentary_filming")}
              label="DOCUMENTARY"
              extraClass="px-6 mt-3 ml-3"
            />
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

      <div className="flex lg:flex-row flex-col items-center w-full mt-10 justify-between font-lexend text-light">
        <img
          className="h-10"
          alt="deesignal-logo"
          src={"/Deesignal-logo.png"}
        />
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
          <li onClick={() => navigate("/blog")} className="pl-6 cursor-pointer">
            Blog
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
