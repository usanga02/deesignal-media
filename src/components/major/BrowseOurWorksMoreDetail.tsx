import React from "react";
import Button from "../variants/Button";

type Props = {};

const BrowseOurWorksMoreDetail = (props: Props) => {
  return (
    <div className="text-center">
      <div className="flex flex-col w-full items-center">
        <h4 className="font-[500] mb-8 text-dark">DEESIGNAL MEDIA</h4>
        <div className="flex justify-between text-primary font-[500] h-44 text-justify w-4/5">
          <p className="w-1/2 pr-12 pl-14">
            At DEESIGNAL Media we offer services From birthdays, bridal showers,
            baby showers, to every gathering in between, we would love to be a
            part of those joyous moments.
          </p>
          <hr className="text-light-primary border-[1px] text-opacity-50 h-2/3 mt-4 w-[1px]" />
          <p className="w-1/2 pl-12 pr-14">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            mmodo ligulaet olor. Aenean massa. Cum Aenean massa. Lorem ipsum
            dolor sit amet, consectetiodipiscing elit. Aenean mmodo ligulaet
            dolor. Aenean assa. Cumnean massa. LorLorem ipsum dolor sit amet,
            consecteoipiscing elit. Aenean.{" "}
          </p>
        </div>
      </div>
      <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
      <hr className="text-light-primary border-[1px] text-opacity-50 mt-0.5 mb-12" />
      <div className="flex flex-col items-center">
        <h5 className="mb-4 font-[500]">
          VIEW MORE OF OUR WORKS ON OUR INSTAGRAM PAGE
        </h5>
        <p className="text-primary font-[500] w-1/2 mb-9">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean mmodo
          ligulaet olor. Aenean massa. Cum Aenean massa. Lorem ipsum dolor sit
          amet, consectetiodipiscing elit. Aenean mmodo
        </p>
        <img
          className="mb-9"
          src="/Deesignal-logo-dark.png"
          width={300}
          height={300}
        />
        <a
          className="hover:underline mb-16 font-[500] underline-offset-2"
          href="https://www.partyoverhererentalstx.com/gallery.php"
        >
          https://www.partyoverhererentalstx.com/gallery.php
        </a>
      </div>
      <div className="flex flex-col items-center p-20 bg-dark">
        <h5 className="text-light text-xl w-[410px] mb-10 font-druk-wide font-[700]">
          Want to capture the action? Lets Shoot.
        </h5>
        <Button extraClass="px-10" label="BOOK US" />
      </div>
    </div>
  );
};

export default BrowseOurWorksMoreDetail;
