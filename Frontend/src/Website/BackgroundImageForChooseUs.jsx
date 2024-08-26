import React from "react";
import ee3 from "../assets/data/shapes/e3.svg";
import ee4 from "../assets/data/shapes/e4.svg";
import ee9 from "../assets/data/shapes/e9.svg";
import ee14 from "../assets/data/shapes/e14.svg";
import ee16 from "../assets/data/shapes/e16.svg";
import ee19 from "../assets/data/shapes/e19.svg";

const BackgroundImageForChooseUs = () => {
  return (
    <>
      <img
        src={ee4}
        className="absolute top-[550px] left-[5px]"
        width={150}
        height={150}
      />

      <img
        src={ee19}
        className="absolute top-[700px] left-[60px]"
        width={200}
        height={200}
      />
      <img
        src={ee9}
        className="absolute top-[120px] left-[60px]"
        width={90}
        height={90}
      />
      <img
        src={ee3}
        className="absolute top-[-160px] left-[720px] -z-10"
        height={770}
        width={770}
      />
      <img
        src={ee3}
        className="absolute top-[-160px] left-[720px] -z-10"
        height={770}
        width={770}
      />
      <img
        src={ee14}
        className="absolute top-[100px] right-[730px] -z-10"
        height={50}
        width={50}
      />
      <img
        src={ee14}
        className="absolute top-[785px] right-[300px] -z-10"
        height={20}
        width={20}
      />
      <img
        src={ee16}
        className="absolute top-[600px] right-[680px]"
        height={30}
        width={30}
      />
    </>
  );
};

export default BackgroundImageForChooseUs;
