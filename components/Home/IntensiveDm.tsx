"use client";
import React from "react";
import Image from "next/image";

function IntensiveDm() {
  return (
    <div className=" w-full h-screen bg-line-container-bg bg-cover sm:pr-[110px] overflow-hidden">
      <div className="flex justify-end pt-[30px]">
        <Image
          src={"/bee-white-icon.png"}
          width={85}
          height={60}
          alt={"3month course image"}
        />
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-center gap-[30px] sm:flex-row">
        <div className="hidden sm:block">
          <Image
            src={"/hands.webp"}
            width={885}
            height={449}
            alt={"3month course image"}
          />
        </div>
        {/* Part 2 */}

        <div className="flex flex-col pl-[20px] gap-8 sm:flex-col  sm:justify-between">
          <div className="w-full ">
            <h1 className=" text-[45px]  font-k2d font-bold  uppercase leading-[1] sm:text-[80px] text-white">
              AI-INTEGRATED <br /> DIGITAL <br /> MARKETING <br /> COURSE
            </h1>
            <p className="text-[16px] font-k2d font-[600] sm:text-[30px]">
              {" "}
              (Students & Freshers)
            </p>
          </div>

          <div className="w-full sm:w-1/3 flex flex-col ">
            {/* 3 Month class  */}

            <div className="">
              <Image
                src={"/3months.webp"}
                width={1000}
                height={222}
                alt={"3month course image"}
                className="w-[250px] h-[110px] sm:w-full sm:h-full"
              />
            </div>
          </div>
        </div>
        <div className="block w-full  sm:hidden">
          <Image
            src={"/hands.webp"}
            width={900}
            height={449}
            alt={"3month course image"}
            className="w-full"
          />
        </div>
      </div>

      {/* Part 1 */}
    </div>
  );
}

export default IntensiveDm;
