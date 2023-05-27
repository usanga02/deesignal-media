import OurWorks from "../components/major/OurWorks";
import SocialsNavbar from "../components/basic/SocialsNavbar";
import WhatOurClientsSay from "../components/major/WhatOurClientsSay";
import WhatWeDo from "../components/major/WhatWeDo";
import Hero from "../components/major/Hero";
import Navbar from "../components/basic/Navbar";
import Blog from "../components/major/Blog";
import Footer from "../components/major/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="h-screen bg-primary">
        <Navbar />
        <Hero />
      </div>
      <div className="">
        <SocialsNavbar />
        <WhatWeDo />
        <OurWorks />
        <WhatOurClientsSay />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
