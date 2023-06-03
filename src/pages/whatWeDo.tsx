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
      <div className="relative h-[90vh] bg-night">
        <Navbar />

        <div className="h-fit w-full flex flex-col justify-between">
          <h2 className="text-light font-druk-wide cover md:px-52 mt-44 font-[700] leading-relaxed text-3xl text-center">
            We Capture The Action And Help Keep Good Memories of Moments
            Captured By Our Lens
          </h2>

          <p className="absolute bottom-12 left-[50%] text-[#ffffffb3]  text-lg -translate-x-[50%]">
            See Our Services in Details Below
          </p>
        </div>
      </div>

      <section className="px-16 mt-20">
        <Category
          heading="Wedding Films"
          description="From the tears of joy to the infectious laughter, we are committed to preserving the heartfelt moments and intimate details that make your wedding unique. 
          At Deesignal Media, we believe that every love story deserves to be cherished and immortalized. Our dedicated team of skilled cinematographers and storytellers are here to create breathtaking wedding films that (see more…) beautifully encapsulate the essence of your special day.
          Relive the magic, the laughter, and the overwhelming love over and over again, even after many years, with our Wedding Films Production Service. Let us create a timeless masterpiece that will be cherished for generations to come.
          Contact us today to discuss your wedding film vision and let us bring your love story to life on the silver screen.
          "
        />
      </section>

      <section className="px-16 mt-20">
        <h1 className="font-druk-wide text-[#00000099] text-2xl text-center mb-20">
          Live Event Streaming
        </h1>

        <div className="flex gap-10 items-center">
          <div>
            <div>
              <h1 className="font-druk-wide text-[#00000099] text-2xl">
                Birthdays
              </h1>

              <p className="mt-5 text-[#000000cc]">
                Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo
                ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis
                irturienntes, nascetur sociis natnatibus et magnisrienntes,
                nascetur mmodo ligulaet dolor. Aenean maa. Cum Lorem ipsum dolor
                sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean
                massa. Cum sociis natnatibus et magnis irturienntes, nascetur
                sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet
                dolor. Aenean maa. Cum{" "}
              </p>
            </div>

            <div>
              <h1 className="font-druk-wide text-[#00000099] text-2xl mt-10">
                Funnerals
              </h1>

              <p className="mt-5 text-[#000000cc]">
                Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo
                ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis
                irturienntes, nascetur sociis natnatibus et magnisrienntes,
                nascetur mmodo ligulaet dolor. Aenean maa. Cum Lorem ipsum dolor
                sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean
                massa. Cum sociis natnatibus et magnis irturienntes, nascetur
                sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet
                dolor. Aenean maa. Cum{" "}
              </p>
            </div>
          </div>

          <img src={require("../assets/img/right2.png")} alt="" />
        </div>
      </section>

      <section className="px-16 mt-20">
        <Category
          heading="Documentary Filming"
          description="Whether you're a lover of thought-provoking storytelling, a seeker of knowledge, or an agent of change, our documentary service will captivate your senses and expand your horizons.
          We believe in the power of documentaries to educate, inspire, and connect people from all walks of life. With our documentary service, you can expect unparalleled authenticity, inspired change and empathy, engagement and information, as we strive to present real stories in their purest form, providing an unfiltered look into the lives and experiences of individuals and communities worldwide. 
          Let's talk about your next documentary film as we provide all you need on your extraordinary cinematic expedition, and together, let's uncover the power of real-life stories that resonate with the world.
          "
        />
      </section>

      <section className="px-16 mt-20">
        <Support />
      </section>

      <div className="bg-moon-light p-16 text-[#fff] -z-10 relative -mt-[22%]">
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
