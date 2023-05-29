import React from "react";
import Footer from "../components/major/Footer";
import Navbar from "../components/basic/Navbar";
import OurWorksHeader from "../components/major/OurWorksHeader";
import BrowseOurWorks from "../components/major/BrowseOurWorks";

type Props = {};

const OurWorksPage = (props: Props) => {
  return (
    <div>
      <div className="h-screen bg-primary">
        <Navbar />
        <OurWorksHeader />
      </div>
      <div>
        <BrowseOurWorks />
        <Footer />
      </div>
    </div>
  );
};

export default OurWorksPage;
