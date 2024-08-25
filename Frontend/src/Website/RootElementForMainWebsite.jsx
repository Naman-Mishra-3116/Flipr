import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import ChooseUs from "./ChooseUs";
import Footer from "./Footer";
import Projects from "./Projects";
const RootElementForMainWebsite = () => {
  return (
    <div>
      <Header />
      <Landing />
      <ChooseUs />
      <Projects />
      <Footer />
    </div>
  );
};

export default RootElementForMainWebsite;
