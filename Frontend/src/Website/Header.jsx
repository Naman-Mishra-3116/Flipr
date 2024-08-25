import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/data/images/logo.svg";

const Header = () => {
  const styleFunction = ({ isActive }) => {
    return isActive
      ? "bg-white text-[#1E2A5E] rounded-md px-4 py-2 transition duration-300 hover:bg-orange-400 hover:text-white"
      : "hover:text-[#1E2A5E] hover:rounded-md px-4 py-2 transition duration-300";
  };

  return (
    <header className="bg-[white] w-full py-5 px-20 flex justify-between text-lg mb-0 sticky top-0 z-50">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav className="flex justify-center items-center gap-5 ">
        <NavLink to={"/"} className={styleFunction} end>
          Home
        </NavLink>
        <NavLink
          to={"/admin"}
          className={
            "text-[#1E2A5E] px-4 py-2 hover:bg-orange-400 transition duration-300 hover:text-white rounded-lg"
          }
          end
        >
          Admin Panel
        </NavLink>

        <NavLink to={"/"} className={styleFunction} end>
          Services
        </NavLink>
        <NavLink to={"/"} className={styleFunction} end>
          About Projects
        </NavLink>
        <NavLink to={"/"} className={styleFunction} end>
          Testimonials
        </NavLink>
        <NavLink
          to={"/"}
          className={
            "bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg"
          }
          end
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
