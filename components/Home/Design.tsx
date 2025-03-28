"use client";
import React from "react";

function Design() {
  return (
    <div className="w-screen h-[560px] pr-[20px] pl-[20px]  bg-design-bg-mob  bg-cover bg-no-repeat capitalize text-bee-offwhite flex flex-col justify-around items-start sm:justify-around  sm:items-center sm:bg-design-bg sm:flex-row sm:pr-[110px] sm:pl-[110px] sm:h-screen">
      <div>
        <h1 className="text-[70px]  font-k2d font-[800] leading-[.9] sm:text-[180px]">
          Design
          <br /> for
          <br /> digital
        </h1>
      </div>
      <div>
        <h1 className="text-[18px] font-k2d font-[600] w-[279px] border border-white p-[10px] leading-[.9] sm:text-[50px] sm:border-none sm:w-[615px] overflow-hidden">
          An intensive <br />
          Graphic Design Programme
        </h1>
        <p className="text-[13px] sm:text-[20px] font-[400] font-k2d ">
          The program is structured to balance theory, practical skills and
          real-world projects:
        </p>
      </div>
    </div>
  );
}

export default Design;
