import React from "react";
import { NavLink } from "react-router-dom";
import SubscriberForm from "./SubscriberForm";

const SubscribeFooter = () => {
  const navItems = ["Home", "Services", "Projects", "Testimonials", "Contacts"];

  return (
    <div className="bg-blue-600 w-full px-14 py-4 flex justify-between items-center">
      <nav className="flex gap-5 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item}
            end
            to="#"
            className="hover:bg-white hover:text-blue-600 rounded-lg text-white px-2 py-1"
          >
            {item}
          </NavLink>
        ))}
      </nav>
      <SubscriberForm />
    </div>
  );
};

export default SubscribeFooter;
