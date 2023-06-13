import { useNavigate } from "react-router-dom";
import Button from "../variants/Button";

type Props = {};

const BrowseOurWorksMoreDetail = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <div className="flex flex-col w-full items-center">
        <h4 className="font-[500] mb-8 text-dark">DEESIGNAL MEDIA</h4>
        <div className="flex md:flex-row flex-col justify-between text-primary font-[500] text-justify w-4/5">
          <p className="md:w-1/2 md:pr-12 md:pl-14">
            At DEESIGNAL Media we offer services From birthdays, bridal showers,
            baby showers, to every gathering in between, we would love to be a
            part of those joyous moments.
          </p>
          <hr className="text-light-primary border-[1px] text-opacity-50 h-2/3 mt-4 w-[1px]" />
          <p className="md:w-1/2 md:pl-12 md:pr-14">
            At Deesignal Media, we understand the immense power of video as a
            communication tool. Whether it's capturing memorable moments,
            broadcasting live events, or creating thought-provoking
            documentaries, our team of talented professionals is dedicated to
            delivering high-quality content that engages and resonates with
            audiences.
          </p>
        </div>
      </div>
      <hr className="text-light-primary border-[1px] text-opacity-50 mt-5" />
      <hr className="text-light-primary border-[1px] text-opacity-50 mt-0.5 mb-12" />
      <div className="flex flex-col items-center px-4">
        <h5 className="mb-4 font-[500]">
          VIEW MORE OF OUR WORKS ON OUR INSTAGRAM PAGE
        </h5>
        <p className="text-primary font-[500] md:w-1/2 mb-9 md:mx-0 mx-5">
          At DEESIGNAL Media we offer services From birthdays, bridal showers,
          baby showers, to every gathering in between, we would love to be a
          part of those joyous moments.
        </p>
        <img
          className="mb-9"
          src="/Deesignal-logo-colored.png"
          alt="deesignal logo"
          width={300}
          height={300}
        />
        <a
          className="hover:underline mb-16 font-[500] underline underline-offset-2"
          target="_blank"
          href="https://instagram.com/deesignalmedia?igshid=NTc4MTIwNjQ2YQ=="
        >
          Deesignal Instagram Page
        </a>
      </div>
      <div className="flex flex-col items-center px-5 py-20 lg:p-20 bg-moon-light">
        <h5 className="text-night text-xl w-full lg:w-[410px] mb-10 font-druk-wide font-[700]">
          Want to capture the action? Lets Shoot.
        </h5>
        <Button
          onClick={() => navigate("/book_us")}
          variant="dark"
          extraClass="px-10"
          label="BOOK US"
        />
      </div>
    </div>
  );
};

export default BrowseOurWorksMoreDetail;
