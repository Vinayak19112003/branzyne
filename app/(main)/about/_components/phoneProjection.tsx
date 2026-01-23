import React from "react";
import Carousel3D from "../scroll";

const PhoneProjection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Carousel3D />
      <img src={"./phone.png"}  className="w-[220px]"/>
    </div>
  );
};

export default PhoneProjection;
