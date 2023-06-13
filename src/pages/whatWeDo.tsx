import React from "react";
import Navbar from "../components/basic/Navbar";
import Button from "../components/variants/Button";
import Footer from "../components/major/Footer";
import Category from "../components/work/Category";
import Support from "../components/work/Support";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 right-0"
    >
      <div className="relative h-screen bg-night">
        <Navbar />

        <div className="h-fit w-full flex flex-col justify-between">
          <h2 className="text-light font-druk-wide cover md:px-52 sm:mt-44 mt-32 font-[700] leading-relaxed sm:text-3xl text-xl text-center">
            We Capture The Action And Help Keep Good Memories of Moments
            Captured By Our Lens
          </h2>

          <p className="absolute bottom-12 left-[50%] text-[#ffffffb3] text-center md:text-lg text-sm -translate-x-[50%]">
            See Our Services in Details Below
          </p>
        </div>
      </div>

      <section className="md:px-16 px-4 mt-20">
        <Category
          heading="Wedding Films"
          description="Our wedding films are more than just a documentation of the day; they are love
          stories told through the lens of our talented cinematographers. We capture the
          intimate glances, the joyful tears, and the heartfelt vows, preserving them for eternity.
          Whether it's an intimate ceremony or a grand celebration, we ensure that every
          cherished moment is immortalised with the utmost care and artistry."
          imgSrc="wedding_photos.png"
        />
      </section>

      <section className="md:px-16 px-4 mt-20">
        <div className="flex md:flex-row flex-col gap-20 items-center">
          <div className="order-2 md:order-1">
            <div>
              <h1 className="font-druk-wide text-[#00000099] text-2xl">
                Live Event Streaming
              </h1>

              <p className="mt-5 text-justify text-[#000000cc]">
                In the realm of live event streaming, we bring the energy and
                excitement of your event to life, bridging the gap between
                physical and virtual audiences. From corporate
                conferences,weddings, award ceremonies, to concerts, we employ
                cutting-edge technology and expertise to deliver seamless live
                experiences that captivate viewers around the world. With our
                team behind the scenes, you can focus on creating unforgettable
                moments while we handle the technical magic.
              </p>
            </div>

            <div>
              <h1 className="font-druk-wide text-[#00000099] text-2xl mt-10">
                Funerals
              </h1>

              <p className="mt-5 text-justify text-[#000000cc]">
                At Deesignal Media, we understand the profound impact of loss
                and the importance of honoring and celebrating the lives of
                loved ones who have passed away.
              </p>
              <p className="mt-2 text-justify">
                Our cinematic funeral videos go beyond mere documentation. They
                are poignant narratives that encapsulate the essence of the
                individual, their life, and the impact they had on those around
                them. We focus on capturing the emotions, the connections, and
                the moments of remembrance that define the funeral service.
                Through our artful storytelling, we aim to create a lasting
                tribute that brings solace, healing, and a sense of closure to
                grieving families and friends
              </p>
            </div>
          </div>

          <img
            className="order-1 md:order-2"
            src={require("../assets/img/live_event_streaming.png")}
            alt=""
          />
        </div>
      </section>

      <section className="md:px-16 px-4 mt-20">
        <Category
          heading="Documentary Films"
          description="Whether you're a lover of thought-provoking storytelling, a seeker of knowledge, or an agent of change, our documentary service will captivate your senses and expand your horizons.
          We believe in the power of documentaries to educate, inspire, and connect people from all walks of life. With our documentary service, you can expect unparalleled authenticity, inspired change and empathy, engagement and information, as we strive to present real stories in their purest form, providing an unfiltered look into the lives and experiences of individuals and communities worldwide. 
          Let's talk about your next documentary film as we provide all you need on your extraordinary cinematic expedition, and together, let's uncover the power of real-life stories that resonate with the world.
          "
          imgSrc="documentary.png"
        />
      </section>

      <section className="md:px-16 px-4 mt-20">
        <Support />
      </section>

      <div className="bg-moon-light md:px-16 md:py-[70px] p-8 text-[#fff] -z-10 relative md:-mt-[22.1%]">
        <p className="font-druk-wide font-[700] text-night leading-relaxed text-xl">
          Want to capture the action? <br />
          Lets Shoot.
        </p>

        <Button
          label="Book Us"
          onClick={() => navigate("/book_us")}
          variant="dark"
          extraClass="px-10 mt-10"
        />
      </div>

      <div>
        <Footer />
      </div>
    </m.section>
  );
};

export default WhatWeDo;
