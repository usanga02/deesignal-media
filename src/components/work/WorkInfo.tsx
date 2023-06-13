import React from "react";

type Props = {
  note?: string;
  whatwedid?: string;
  whatweused?: string;
  outcome?: string;
};

const WorkInfo = ({ note, whatwedid, whatweused, outcome }: Props) => {
  return (
    <div className="bg-[#16213A] p-8 py-16 md:p-16 text-white">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-28 md:w-4/12">
          <h1 className="text-sm">PHOTOGRAHPY BY.</h1>
          <h1>DEESIGNAL MEDIA</h1>
        </div>

        <div className="md:w-4/12 md:flex md:justify-start md:pl-40 md:mt-20">
          <div className="border md:h-[200px] w-full mt-5 mb-10 md:mb-0 md:my-0 border-gray-600 md:w-[1px]"></div>
        </div>

        {note ? (
          <div className="xl:w-3/12 w-4/12">
            <h1 className="text-lg">COUPLES NOTE.</h1>
            <p className="mb-2 text-sm text-gray-300 mt-4">{note}</p>
            {/* {note} */}
          </div>
        ) : (
          <div className="xl:w-3/12 md:w-4/12 w-full">
            <h1 className="text-lg">WHAT WE DID.</h1>
            <p className="mb-4 text-sm text-gray-300 mt-2">{whatwedid}</p>
            <h1 className="text-lg">WHAT WE USED.</h1>
            <p className="mb-4 text-sm text-gray-300 mt-2">{whatweused}</p>
            <h1 className="text-lg">OUTCOME.</h1>
            <p className="mb-4 text-sm text-gray-300 mt-2">{outcome}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkInfo;
