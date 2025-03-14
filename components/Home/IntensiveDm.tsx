"use client";
import React from "react";
import Image from "next/image";

function IntensiveDm() {
  return (
    <div className="pr-[110px] w-full h-[860px] bg-line-container-bg bg-cover">
      <div className="flex justify-end pt-[30px]">
        <Image
          src={"/bee-white-icon.png"}
          width={85}
          height={60}
          alt={"3month course image"}
        />
      </div>
      <div className="h-[860px] flex flex-row items-center justify-center gap-[30px]">
        <div>
          <Image
            src={"/hands.png"}
            width={885}
            height={449}
            alt={"3month course image"}
          />
        </div>
        {/* Part 2 */}

        <div className="flex flex-col gap-8 sm:flex-col  sm:justify-between">
          <div className="w-full sm:w-full">
            <h1 className=" text-[33px]  font-k2d font-bold  uppercase leading-[1] sm:text-[80px] text-white">
              AI-INTEGRATED <br /> DIGITAL <br /> MARKETING <br /> COURSE
            </h1>
            <p className="text-[30px] font-k2d font-[600]">
              {" "}
              (Students & Freshers)
            </p>
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

      {/* Part 1 */}
    </div>
  );
}

export default IntensiveDm;
