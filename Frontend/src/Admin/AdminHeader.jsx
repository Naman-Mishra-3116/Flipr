import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  const styleFunction = ({ isActive }) => {
    return isActive
      ? "bg-[#E1D7B7] text-[#1E2A5E] rounded-md px-4 py-2 transition duration-300"
      : "hover:bg-[#E1D7B7] hover:text-[#1E2A5E] hover:rounded-md px-4 py-2 transition duration-300";
  };

  return (
    <header className="bg-[#1E2A5E] w-full py-5 px-8 flex justify-between text-lg">
      <NavLink
        to={"/"}
        className={
          "hover:bg-[#E1D7B7] hover:text-[#1e2a5e] hover:rounded-md px-4 py-2 transition duration-300 text-[#E1D7B7]"
        }
        end
      >
        Home
      </NavLink>
      <nav className="flex justify-center items-center gap-5 text-[#E1D7B7]">
        <NavLink to={"/admin"} className={styleFunction} end>
          Projects
        </NavLink>
        <NavLink to={"/admin/allClients"} className={styleFunction} end>
          Clients
        </NavLink>
        <NavLink to={"/admin/subscribers"} className={styleFunction} end>
          Subscribers
        </NavLink>
        <NavLink to={"/admin/allContacts"} className={styleFunction} end>
          Contacts
        </NavLink>
        <NavLink to={"/admin/createProject"} className={styleFunction} end>
          Add Project
        </NavLink>
        <NavLink to={"/admin/createClient"} className={styleFunction} end>
          Add Client
        </NavLink>
      </nav>
    </header>
  );
};

export default AdminHeader;
