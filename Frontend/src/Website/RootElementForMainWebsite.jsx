import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import ChooseUs from "./ChooseUs";
import Footer from "./Footer";
const RootElementForMainWebsite = () => {
  return (
    <div>
      <Header />
      <Landing />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default RootElementForMainWebsite;
