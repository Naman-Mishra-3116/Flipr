import React from "react";
import ImagePreview from "../UI/ImagePreview";

const Row = ({
  item,
  deleteById,
  index,
  type,
  isClient = false,
  isProject = false,
}) => {
  console.log("type recieved in row ", type);
  return (
    <tr className="border-b border-orange-400 hover:bg-blue-50 hover:text-gray-800">
      <td className="py-3 px-6 text-left">{index + 1}</td>
      {(isClient || isProject) && (
        <td className="py-3 px-6 text-left">
          <ImagePreview image={item.image} />
        </td>
      )}
      <td className="py-3 px-6 text-left">{item.name}</td>
      {isClient && <td className="py-3 px-6 text-left">{item.designation}</td>}
      {isProject && <td className="py-3 px-6 text-left">{item.description}</td>}

      <td className="py-3 px-6 text-left">
        <button
          onClick={() => deleteById(item._id, type)}
          className="bg-red-500 px-4 py-2 rounded-lg text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
