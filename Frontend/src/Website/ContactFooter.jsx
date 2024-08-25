import React from "react";
import logo from "../assets/data/images/logo.svg";
import sm1 from "../assets/data/icons/Frame.svg";
import sm2 from "../assets/data/icons/Linkedin.svg";
import sm3 from "../assets/data/icons/g1.svg";
import sm4 from "../assets/data/icons/Group.svg";

const Icon = ({ icon }) => {
  return (
    <div className="bg-white rounded-full p-2">
      <img src={icon} alt="social media icon" width={20} height={20} />
    </div>
  );
};
const ContactFooter = () => {
  return (
    <div className="bg-slate-900 w-full px-14 py-6 flex justify-between text-white items-center ml-auto mr-auto">
      <p className="ml-7">All Rights Reserved {new Date().getFullYear()}</p>
      <img src={logo} width={200} height={50} />
      <nav className="flex gap-3 mr-7">
        <Icon icon={sm1} />
        <Icon icon={sm2} />
        <Icon icon={sm3} />
        <Icon icon={sm4} />
      </nav>
    </div>
  );
};

export default ContactFooter;
