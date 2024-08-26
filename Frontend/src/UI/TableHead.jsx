import React from "react";

const TableHead = ({ array }) => {
  return (
    <thead>
      <tr className="bg-orange-400 text-white uppercase text-sm leading-normal">
        {array.map((item) => {
          return (
            <th
              className="py-3 px-6 text-left border-b border-orange-400"
              key={item}
            >
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
