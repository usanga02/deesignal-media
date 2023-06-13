type Props = {};

const ControlsButtons = (props: Props) => {
  return (
    <div className="flex justify-between w-36">
      <button className="border-[1px] hover:bg-light border-light md:pt-1 pb-1 md:pb-2 text-2xl text-light hover:text-night transition-all px-3 md:px-4">
        ←
      </button>
      <button className="border-[1px] hover:bg-light border-light md:pt-1 pb-1 md:pb-2 text-2xl text-light hover:text-night transition-all px-3 md:px-4">
        →
      </button>
    </div>
  );
};

export default ControlsButtons;
