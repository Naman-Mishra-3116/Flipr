import React from "react";

const ClientCard = ({ image, name, description, designation }) => {
  const limitedDescription =
    description.split(" ").slice(0, 30).join(" ") +
    (description.split(" ").length > 30 ? "..." : "");

  return (
    <div className="rounded-lg shadow-lg bg-blue-50  transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-xs mx-auto p-4">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt="Client"
          className="rounded-full w-14 h-14 object-cover mb-6"
        />
        <div className="text-left w-full">
          <div className="w-full h-[120px] mb-6">
            <p className="text-gray-700 mb-4 text-sm">{limitedDescription}</p>
          </div>
          <p className="font-semibold text-blue-900 text-lg">{name}</p>
          <p className="text-gray-500 font-bold">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
