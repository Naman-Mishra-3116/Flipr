import React from "react";
import e11 from "../assets/data/images/e11.svg";
import e12 from "../assets/data/images/e12.svg";
import e13 from "../assets/data/images/e13.svg";
import r58 from "../assets/data/shapes/r58.svg";
import home from "../assets/data/icons/home.svg";
import paint from "../assets/data/icons/pb.svg";
import dollar from "../assets/data/icons/dollar.svg";
import ChooseOption from "../UI/ChooseOption";
import gt from "../assets/data/shapes/e30.svg";
import BackgroundImageForChooseUs from "./BackgroundImageForChooseUs";

const ChooseUs = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-between mt-[-40px] px-20 py-2 items-center relative">
        <BackgroundImageForChooseUs />
        <div className="w-[40%] ml-6">
          <h1 className="text-3xl font-bold mb-4 text-left text-blue-600">
            Not Your Average Realtor
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            illum ab nam repellat hic eveniet nostrum iste molestias voluptates
            consectetur beatae voluptate. Iste quam voluptatem sint in magnam
            quae consectetur beatae voluptate. Iste quam voluptatem sint in
            magnam quae
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <img src={e11} alt="" width={350} height={350} />
          </div>
          <div className="flex flex-col justify-center items-center mr-4">
            <img src={e12} alt="" width={250} height={250} className="mb-4" />
            <img src={e13} alt="" width={250} height={250} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-blue-700 text-[32px] font-semibold text-center">
            Why Choose Us?
          </h1>
          <img src={r58} alt="" width={120} className="mb-5" />
        </div>
        <div className="flex w-[1150px] ml-auto mr-auto gap-14 mt-[30px]">
          <ChooseOption icon={home} title={"Potential ROI"} />
          <ChooseOption icon={paint} title={"Design"} />
          <ChooseOption icon={dollar} title={"Marketing"} />
        </div>
        <div className="flex w-full mr-10 justify-end mt-8">
          <div className="mr-[200px]">
            <img src={gt} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
