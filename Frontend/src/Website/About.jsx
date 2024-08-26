import React from "react";
import r58 from "../assets/data/shapes/r58.svg";
import p1 from "../assets/data/images/p1.svg";
import p5 from "../assets/data/images/p5.svg";
import p6 from "../assets/data/images/p6.svg";
import BackgroundImage from "./BackgroundImage";

const About = () => {
  return (
    <div id="about" className="h-screen w-3/5 ml-auto mr-auto relative">
      <BackgroundImage />
      <div className="mt-[8rem] mb-[3rem]">
        <div className="flex gap-10 mt-5 mb-5 justify-center h-[275px]">
          <img src={p5} width={150} height={150} className="self-start mb-10" />
          <img src={p1} width={250} height={250} className="self-end mt-20 z-20" />
          <div className="self-end">
            <img src={p6} width={150} height={150} />
            <div className="mt-4"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 mt-5">
        <h1 className="text-blue-700 text-[32px] font-semibold text-center mt-10">
          About Us
        </h1>
        <img src={r58} alt="" width={120} className="mb-5" />
        <p className="text-center w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          incidunt minima atque maxime sed nostrum voluptate! Neque et rerum
          quos, quibusdam possimus dolore placeat cupiditate itaque molestias,
          ipsum ratione beatae maiores vel. Illum repellat commodi at, adipisci
          nihil architecto deserunt voluptatem omnis doloribus! Adipisci,
        </p>
        <button className="text-blue-600 bg-white shadow-lg px-20 py-2 rounded-lg font-bold my-5 border-b-2 border-solid border-blue-700">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default About;
