import React from "react";

const Support = () => {
  return (
    <>
      <h1 className="font-druk-wide text-[#00000099] text-2xl text-center mb-20">
        Support
      </h1>

      <div className="flex md:flex-row flex-col gap-10">
        <div>
          <div>
            <h1 className="font-druk-wide text-[#00000099] text-2xl">
              Audio Support
            </h1>

            <p className="mt-5 text-[#000000cc]">
              Our comprehensive Audio and Visual Support services encompass
              state-of-the-art sound systems, crystal-clear projection, dynamic
              lighting, and cutting-edge visual effects. We meticulously tailor
              our solutions to match your specific needs, ensuring every word is
              heard, every image is vivid, and every moment is amplified. With
              our experienced technicians and top-of-the-line equipment, we
              seamlessly integrate audio and visual elements to transform your
              venue into an unforgettable space. From professional-grade sound
              setups that deliver clear, immersive audio, to high-resolution
              projection systems that bring your visuals to life, we take care
              of every detail to ensure a flawless experience.
            </p>
          </div>

          <div>
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
          </div>
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
