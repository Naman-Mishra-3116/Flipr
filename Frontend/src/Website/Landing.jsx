import React from "react";
import backgroundImage from "../assets/data/images/mainLanding.svg";
import ContactForm from "./ContactForm";

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex gap-5 items-center justify-between h-full text-white p-8">
        <div className="p-8 text-left mt-[80px] ml-6">
          <h1 className="text-[60px] font-bold leading-tight ml-4">
            <span className="block">Consultation,</span>
            <span className="block">Design,</span>
            <span className="flex">& Marketing</span>
          </h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Landing;
