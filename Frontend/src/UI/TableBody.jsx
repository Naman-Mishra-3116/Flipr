import React from "react";
import Row from "../Admin/ClientRow";

const TableBody = ({ data, deleteById, isProject, isClient }) => {
  return (
    <tbody className="text-black text-md font-bold">
      {data.map((item, index) => (
        <Row
          item={item}
          deleteById={deleteById}
          key={index}
          index={index}
          isClient={isClient}
          isProject={isProject}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
