import React from "react";

type Props = {};

const BookUsDetails = (props: Props) => {
  return (
    <div className="px-24 py-10 flex flex-col items-center text-center">
      <h5 className="font-lexend font-[500]">WE CAN’T WAIT TO WORK FOR YOU!</h5>
      <hr className="h-1 bg-dark w-8 my-6" />
      <h5 className="font-lexend font-[500] py-2">EMAIL</h5>
      <h6 className="font-lexend text-sm font-[50] text-dark-text pb-4">
        info@deesignalmedia.com
      </h6>
      <h5 className="font-lexend font-[500] py-2">PHONE</h5>
      <h6 className="font-lexend text-sm font-[50] text-dark-text pb-4">
        843.732.0006
      </h6>
      <h5 className="font-lexend font-[500] py-2">VISIT</h5>
      <h6 className="font-lexend text-sm font-[50] text-dark-text text-left w-52 pb-4">
        1304 Erckmann Drive, Suite B Mount Pleasant, SC 29464
      </h6>
    </div>
  );
};

export default BookUsDetails;
