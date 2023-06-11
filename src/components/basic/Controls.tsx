type Props = {};

const ControlsButtons = (props: Props) => {
  return (
    <div className="flex justify-between w-36">
      <button className="border-[1px] hover:bg-light border-light pt-1 pb-2 text-2xl text-light hover:text-night transition-all px-4">
        ←
      </button>
      <button className="border-[1px] hover:bg-light border-light pt-1 pb-2 text-2xl text-light hover:text-night transition-all px-4">
        →
      </button>
    </div>
  );
};

export default ControlsButtons;
