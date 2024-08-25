import React from "react";
import footerImage from "../assets/data/images/Rectangle.svg";
import SubscribeFooter from "./SubscribeFooter";
import ContactFooter from "./ContactFooter";
const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
         
        }}
        className="flex flex-col justify-center items-center gap-5 w-full h-[300px]"
      >
        <h1 className="text-white font-bold text-3xl text-center w-[50%] mb-3">
          Learn more about our listing process. as well as our additional
          staging and design work.
        </h1>
        <button className="text-blue-600 bg-white px-20 py-2 rounded-lg font-bold my-5">
          LEARN MORE
        </button>
      </div>
      <SubscribeFooter />
      <ContactFooter />
    </>
  );
};

export default Footer;
