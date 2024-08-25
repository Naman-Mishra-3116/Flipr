import React from "react";

const ChooseOption = ({
  icon,
  title,
  description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo
        porro in neque sapiente exercitationem quasi quis perferendis veritatis
        ratione?`,
}) => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="bg-gray-200 rounded-full p-4">
        <img src={icon} width={30} height={30} />
      </div>
      <h1 className="text-[22px] text-blue-800 font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ChooseOption;
