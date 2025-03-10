"use client";
import React from "react";
import Image from "next/image";

function IntensiveDm() {
  return (
    <div className=" pr-[110px] w-screen h-[860px] bg-intensive-bg bg-cover bg-no-repeat flex items-center justify-between">
      {/* Part 1 */}
      <div className="w-[800px]">
        <Image
          src={"/hands.png"}
          width={885}
          height={449}
          alt={"3month course image"}
        />
      </div>
      {/* Part 2 */}

      <div className="flex flex-col gap-8 sm:flex-col  sm:justify-between">

        <div className="w-full sm:w-2/3">
          <h1 className=" text-[33px]  font-k2d font-bold  uppercase leading-[1] sm:text-[100px] text-white">
            Intensive
            <br /> Digital
            <br /> marketing
            <br /> program
          </h1>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col ml-[100px]">
          {/* 3 Month class  */}

          <div className="flex items-center">
            {/* left bar */}
            {/* <div className="bg-bee-orange text-black  font-medium px-4 py-2  w-[260px] h-[55px] flex items-center">
              <span className="font-semibold">Mode:</span> Offline Classes
            </div> */}
            {/* circle */}
            <div className="ml-[-25px]">
              <Image
                src={"/3months.png"}
                width={1000}
                height={222}
                alt={"3month course image"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntensiveDm;
