import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import ChooseUs from "./ChooseUs";

const RootElementForMainWebsite = () => {
  return (
    <div>
      <Header />
      <Landing />
      <ChooseUs />
    </div>
  );
};

export default RootElementForMainWebsite;
