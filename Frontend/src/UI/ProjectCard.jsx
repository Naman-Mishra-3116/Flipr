import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="rounded-md shadow-lg bg-slate-200 hover:bg-[#efeee8] transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-full overflow-hidden rounded-t-md">
        <img
          src={image}
          alt="Project image"
          className="object-cover h-48 w-full transition duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-3 text-left p-5">
        <p className="font-semibold text-blue-900 text-lg">{title}</p>
        <p className="text-gray-700">{description}</p>
        <button className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg transform transition duration-500 text-white hover:translate-y-1">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
