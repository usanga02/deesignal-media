import React from "react";
import SearchNavbar from "../basic/SearchNavbar";
import BrowseOurWorksComponent from "./BrowseOurWorksComponent";
import BrowseOurWorksMoreDetail from "./BrowseOurWorksMoreDetail";

type Props = {};

const BrowseOurWorks = (props: Props) => {
  return (
    <div className="pt-8">
      <SearchNavbar />
      <BrowseOurWorksComponent />
      <BrowseOurWorksMoreDetail />
    </div>
  );
};

export default BrowseOurWorks;
