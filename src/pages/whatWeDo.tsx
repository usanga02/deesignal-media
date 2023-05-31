import React from "react";
import Navbar from "../components/basic/Navbar";
import Button from "../components/variants/Button";
import Footer from "../components/major/Footer";
import Category from "../components/work/Category";
import Support from "../components/work/Support";
import { motion as m } from "framer-motion";

const whatWeDo = () => {
  return (
    <m.section
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-full top-0 right-0"
    >
      <div className="h-[90vh] bg-primary">
        <Navbar />

        <div className="h-fit w-full flex flex-col justify-between">
          <h2 className="text-light font-druk-wide cover md:px-52 mt-44 font-[700] leading-relaxed text-3xl text-center">
            We Capture The Action And Help Keep Good Memories of Moments
            Captured By Our Lens
          </h2>

          <p className="absolute bottom-24 left-[50%] text-[#ffffffb3]  text-lg -translate-x-[50%]">
            See Our Services in Details Below
          </p>
        </div>
      </div>

      <section className="px-16 mt-20">
        <Category
          heading="Wedding Films"
          description="Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum"
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
          description="Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum"
        />
      </section>

      <section className="px-16 mt-20">
        <Support />
      </section>

      <div className="bg-[#000] p-16 text-[#fff] -z-10 relative -mt-[22%]">
        <p className="font-druk-wide font-[700] leading-relaxed text-xl">
          Want to capture the action? <br />
          Lets Shoot.
        </p>

        <Button label="Book Us" extraClass="px-10 mt-10" />
      </div>

      <div>
        <Footer />
      </div>
    </m.section>
  );
};

export default whatWeDo;
