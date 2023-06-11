import React from "react";

type Props = {
  note?: string;
  whatwedid?: string;
  whatweused?: string;
  outcome?: string;
};

const WorkInfo = ({ note, whatwedid, whatweused, outcome }: Props) => {
  return (
    <div className="bg-[#16213A] p-16 text-white">
      <div className="flex justify-between">
        <div className="mt-28 w-4/12">
          <h1 className="text-sm">PHOTOGRAHPY BY.</h1>
          <h1>DEESIGNAL MEDIA</h1>
        </div>

        <div className="w-4/12 flex justify-start pl-40 mt-20">
          <div className="border h-[200px] border-gray-600 w-[1px]"></div>
        </div>

        {note ? (
          <div className="xl:w-3/12 w-4/12">
            <h1 className="text-lg">COUPLES NOTE.</h1>
            <p className="mb-2 text-sm text-gray-300 mt-4">{note}</p>
            {/* {note} */}
          </div>
        ) : (
          <div className="xl:w-3/12 w-4/12">
            <h1 className="text-lg">WHAT WE DID.</h1>
            <p className="mb-2 text-sm text-gray-300 mt-4">{whatwedid}</p>
            <h1 className="text-lg">WHAT WE USED.</h1>
            <p className="mb-2 text-sm text-gray-300 mt-4">{whatweused}</p>
            <h1 className="text-lg">OUTCOME.</h1>
            <p className="mb-2 text-sm text-gray-300 mt-4">{outcome}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkInfo;
