import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
const Table = ({ array, data, deleteById, isProject, isClient }) => {
  return (
    <div className="overflow-x-auto w-full ml-5 mr-5">
      <table className="min-w-max w-full table-auto border-collapse border border-[#E1D7B7]">
        <TableHead array={array} />
        <TableBody
          data={data}
          deleteById={deleteById}
          isProject={isProject}
          isClient={isClient}
        />
      </table>
    </div>
  );
};

export default Table;
