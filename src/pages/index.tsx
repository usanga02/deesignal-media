import OurWorks from "../components/basic/OurWorks";
import SocialsNavbar from "../components/basic/SocialsNavbar";
import WhatOurClientsSay from "../components/basic/WhatOurClientsSay";
import WhatWeDo from "../components/basic/WhatWeDo";
import Hero from "../components/major/Hero";
import Navbar from "../components/major/Navbar";

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
      </div>
    </div>
  );
};

export default Home;
