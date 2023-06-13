import React from "react";

const Support = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col xl:mb-[75px] gap-20">
        <div className="md:mt-40">
          <div>
            <h1 className="font-druk-wide text-[#00000099] text-2xl">
              Audio Visual Support
            </h1>

            <p className="mt-5 text-justify text-[#000000cc]">
              Our team of AV specialists is dedicated to delivering immersive
              and captivating audio-visual experiences. Whether you're hosting a
              corporate event, a live concert, or a private function, we have
              the expertise and state-of-the-art equipment to create
              unforgettable moments. From designing and setting up professional
              sound systems to creating stunning visual displays with LED
              screens, we ensure that your event's audio and visual components
              are seamlessly integrated, elevating the overall experience for
              your audience
            </p>
          </div>

          {/* <div>
            <h1 className="font-druk-wide text-[#00000099] text-2xl mt-10">
              Visual Support
            </h1>

            <p className="mt-5 text-[#000000cc]">
              Deesignal Media is a leading media company specializing in video
              coverage, live streaming, and documentary creation. With a strong
              focus on capturing and conveying powerful stories through visual
              mediums, Deesignal Media has established itself as a trusted name
              in the media industry. The company's commitment to excellence,
              innovation, and professionalism sets it apart and ensures that
              clients receive exceptional services tailored to their unique
              needs.
            </p>
          </div> */}
        </div>

        <img
          src={require("../../assets/img/pov-male-influencer-recording-podcast-episode-camera-using-sound-equipment-studio-portrait-content-creator-talking-audience-filming-social-media-channel-vlog 1.png")}
          className="z-10 relative"
          alt=""
        />
      </div>
    </>
  );
};

export default Support;
