import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  const styleFunction = ({ isActive }) => {
    return isActive
      ? "bg-orange-400 text-white rounded-md px-4 py-2 transition duration-300 hover:bg-orange-400 hover:text-white"
      : "hover:bg-orange-400 hover:text-white hover:rounded-md px-4 py-2 transition duration-300";
  };

  return (
    <header className="bg-blue-50 w-full py-5 px-8 flex justify-between text-lg">
      <NavLink
        to={"/"}
        className="hover:bg-orange-400 hover:text-white hover:rounded-md px-4 py-2 transition duration-300 text-black"
        end
      >
        Home
      </NavLink>
      <nav className="flex justify-center items-center gap-5 text-black">
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
