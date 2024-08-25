import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import ChooseUs from "./ChooseUs";
import Footer from "./Footer";
import Projects from "./Projects";
import Clients from "./Clients";
const RootElementForMainWebsite = () => {
  return (
    <div>
      <Header />
      <Landing />
      <ChooseUs />
      <Projects />
      <Clients />
      <Footer />
    </div>
  );
};

export default RootElementForMainWebsite;
