type Props = {};

const ControlsButtons = (props: Props) => {
  return (
    <div className="flex justify-between w-44">
      <button className="border-[1px] hover:bg-light-primary border-light-primary pt-2 pb-3 text-3xl text-light-primary hover:text-primary transition-all px-5">
        ←
      </button>
      <button className="border-[1px] hover:bg-light-primary border-light-primary pt-2 pb-3 text-3xl text-light-primary hover:text-primary transition-all px-5">
        →
      </button>
    </div>
  );
};

export default ControlsButtons;
