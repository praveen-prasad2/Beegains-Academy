"use client";
import React from "react";
import Image from "next/image";

function TheVision() {
  return (
    <div className="bg-thevision-bg  bg-no-repeat bg-cover gap-[50px]  w-full h-auto sm:h-[1500px]  flex flex-col sm:justify-between items-center overflow-hidden">
      {/* Part 1  */}
      <div className="pt-[30px] sm:pt-52">
        <div className="w-[282px] h-[210px] bg-bee-offwhite flex flex-col items-center sm:w-[860px] sm:h-[543px]">
          <div className="w-[282px] h-[62px] sm:w-[860px] sm:h-[224px] bg-bee-orange flex justify-center items-center">
            <h1 className=" font-[800] font-k2d text-[40px] text-bee-offwhite sm:text-[100px]">
              The Vision
            </h1>
          </div>
          <div className="w-[616px] flex text-center justify-center items-center h-[319px]">
            <p className="text-[13px] w-[229px] h-[72px] font-k2d font-normal text-justify sm:text-[20px] sm:w-[616px] sm:h-[72px]">
              To empower individuals with the knowledge and skills to excel in
              the dynamic world of digital marketing, enabling them to build
              successful careers.
            </p>
          </div>
        </div>
      </div>
      {/* Part 2  */}
      <div className="flex flex-col  sm:flex-row sm:pt-[0px]">
        <div>
          <h1 className="text-[30px] pl-[20px] font-k2d font-[800] uppercase leading-[1] text-bee-offwhite sm:pl-[110px] sm:text-[80px]">
            Aquire The <br />
            Mindset Of <br /> Successful
            <br />
            Digital <br /> Marketers
            <br /> Now
          </h1>
        </div>
        <div className="flex items-end overflow-hidden">
          <Image
            src={"/thevisionvector.svg"}
            width={780}
            height={514}
            alt="the vision girl"
          />
        </div>
      </div>
    </div>
  );
}

export default TheVision;
