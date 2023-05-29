import OurWorks from "../components/major/OurWorks";
import SocialsNavbar from "../components/basic/SocialsNavbar";
import WhatOurClientsSay from "../components/major/WhatOurClientsSay";
import WhatWeDo from "../components/major/WhatWeDo";
import Hero from "../components/major/Hero";
import Navbar from "../components/basic/Navbar";
import Blog from "../components/major/Blog";
import Footer from "../components/major/Footer";
import { motion as m } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
  return (
    <m.div
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1, transition: { duration: 1 } }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen bg-primary">
        <Navbar />
        <Hero />
      </div>
      <div>
        <SocialsNavbar />
        <WhatWeDo />
        <OurWorks />
        <WhatOurClientsSay />
        <Blog />
        <Footer />
      </div>
    </m.div>
  );
};

export default Home;
