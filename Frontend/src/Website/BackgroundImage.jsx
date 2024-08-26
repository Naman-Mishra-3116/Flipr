import React from "react";
import e6 from "../assets/data/shapes/e6.svg";
import e7 from "../assets/data/shapes/e7.svg";
import e8 from "../assets/data/shapes/e8.svg";
import e10 from "../assets/data/shapes/e10.svg";
import e11 from "../assets/data/shapes/e11.svg";
import e19 from "../assets/data/shapes/e19.svg";
import e21 from "../assets/data/shapes/e21.svg";
import e22 from "../assets/data/shapes/e22.svg";
import e25 from "../assets/data/shapes/e25.svg";
import e26 from "../assets/data/shapes/e26.svg";
import e27 from "../assets/data/shapes/e27.svg";
import e28 from "../assets/data/shapes/e28.svg";
import e29 from "../assets/data/shapes/e29.svg";

const BackgroundImage = () => {
  return (
    <div>
      <img
        src={e21}
        className="absolute top-[-20px] left-[305px] w-10 h-10 -z-10"
      />
      <img src={e27} className="absolute top-[120px] left-[120px] w-12 h-12" />
      <img src={e29} className="absolute top-[20px] left-[590px] h-10 w-10" />
      <img
        src={e22}
        className="absolute top-[170px] left-[290px]"
        height={150}
        width={150}
      />
      <img src={e22} className="absolute top-[220px] left-[180px] h-12 w-12" />
      <img
        src={e11}
        className="absolute top-[220px] left-[-300px]"
        height={150}
        width={150}
      />
      <img
        src={e10}
        className="absolute top-[160px] left-[-250px]"
        height={150}
        width={150}
      />
      <img
        src={e8}
        className="absolute top-[80px] left-[-150px]"
        height={50}
        width={50}
      />
      <img
        src={e25}
        className="absolute top-[-30px] left-[-100px]"
        height={30}
        width={30}
      />
      <img
        src={e7}
        className="absolute top-[70px] right-[-300px]"
        height={200}
        width={200}
      />
      <img
        src={e6}
        className="absolute top-[20px] right-[-200px]"
        height={150}
        width={150}
      />{" "}
      <img
        src={e19}
        className="absolute top-[-60px] right-[-190px]"
        height={200}
        width={200}
      />
      <img
        src={e10}
        className="absolute bottom-[300px] right-[-200px]"
        height={50}
        width={50}
      />
      <img
        src={e26}
        className="absolute bottom-[150px] right-[-250px]"
        height={50}
        width={50}
      />
      <img
        src={e28}
        className="absolute top-[245px] right-[125px]"
        height={30}
        width={30}
      />
      <img
        src={e25}
        className="absolute top-[550px] left-[-100px]"
        height={100}
        width={100}
      />
    </div>
  );
};

export default BackgroundImage;
