import FormInput from "../variants/FormInput";
import FormCheckbox from "../variants/FormCheckbox";
import FormTextArea from "../variants/FormTextArea";

type Props = {};

const BookUsForm = (props: Props) => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const {
      target: {
        fullName,
        email,
        phone,
        eventDate,
        eventLocation,
        type,
        startTime,
        endTime,
        place,
      },
    } = e;
    console.log(
      fullName.value,
      email.value,
      phone.value,
      eventDate.value,
      eventLocation.value,
      type.value,
      startTime.value,
      endTime.value,
      place.value
    );
  };
  return (
    <div className="relative mt-6 px-3 md:px-24 py-20 border-[1px] border-dark">
      <div className="absolute flex justify-center right-0 left-0 w-auto -top-6">
        <h3 className="px-8 py-3 border-[1px] font-[500] w-fit border-dark bg-light">
          FILL FORM BELOW
        </h3>
      </div>
      <form
        className="flex flex-col w-full items-center"
        onSubmit={handleFormSubmit}
      >
        <div className="grid grid-cols-6 gap-3 md:gap-10 ">
          <FormInput name="fullName" label="FULL NAME *" />
          <FormInput name="email" label="EMAIL *" />
          <FormInput name="phone" label="PHONE *" />
          <FormInput name="eventDate" label="EVENT DATE *" />
          <FormInput name="eventLocation" label="EVENT LOCATION *" />
          <FormInput name="type" label="EVENT TYPE *" />
          <FormInput
            name="service"
            label="WHAT SERVICES ARE YOU INTERESTED IN? *"
            extraClass="col-span-6 md:col-span-3"
          />
          <FormInput
            name="guests"
            label="WHAT IS YOUR ESTIMATED GUEST COUNT? *"
            extraClass="col-span-6 md:col-span-3"
          />
          <FormInput name="startTime" label="EVENT START TIME *" />
          <FormInput name="endTime" label="EVENT END TIME *" />
          <FormInput name="place" label="INDOOR OR OUTDOOR *" />
          <FormInput name="budget" label="WHATS YOUR BUDGET? *" />
          <FormInput name="colorTheme" label="WHATS YOUR THEME/COLOR? *" />
          <FormInput name="sourceRef" label="HOW DID YOU HEAR ABOUT US?" />
          <div className="col-span-6 flex flex-col">
            <h4 className="font-[500] text-dark-text">
              WHAT SUPPORT DO YOU NEED FOR YOUR EVENT?
            </h4>
            <p className="text-sm text-dark-text">Check boxes that apply *</p>
            <div className="mt-5">
              <FormCheckbox name="audio" label="Audio" />
              <FormCheckbox name="visual" label="Visual" />
            </div>
          </div>
          <div className="col-span-6">
            <input
              type="text"
              name="needs"
              className="border-0 border-b-[1px] text-dark-text focus:border-dark focus:border-b-2 mb-10 mt-3 outline-none focus:ring-0 w-full placeholder:text-light-primary font-[500]"
              placeholder="Kindly input what you need for your event here..."
            />
            <FormTextArea
              name="moreDetails"
              label="TELL US MORE ABOUT YOUR EVENT"
            />
          </div>
        </div>
        <button className="px-16 py-3 mt-12 border-[1px] hover:text-light font-[500] hover:bg-dark border-dark w-fit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default BookUsForm;
