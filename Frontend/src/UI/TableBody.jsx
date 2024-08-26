import React from "react";
import Row from "../Admin/ClientRow";

const TableBody = ({ data, deleteById, isProject, isClient,type }) => {
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
          type={type}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
