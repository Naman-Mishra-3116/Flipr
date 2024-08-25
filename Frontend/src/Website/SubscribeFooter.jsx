import React from "react";
import { NavLink } from "react-router-dom";
import SubscriberForm from "./SubscriberForm";

const SubscribeFooter = () => {
  const navItems = [
    { to: "Home", id: "landing" },
    { to: "Services", id: "projects" },
    { to: "Testimonials", id: "clients" },
    { to: "Contacts", id: "landing" },
    { to: "About Us", id: "landing" },
  ];
  const scroll = function (id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-blue-600 w-full px-14 py-4 flex justify-between items-center">
      <nav className="flex gap-5 p-4">
        {navItems.map((item) => (
          <NavLink
            onClick={() => scroll(item.id)}
            key={item}
            end
            to="#"
            className="hover:bg-white hover:text-blue-600 rounded-lg text-white px-2 py-1"
          >
            {item.to}
          </NavLink>
        ))}
      </nav>
      <SubscriberForm />
    </div>
  );
};

export default SubscribeFooter;
