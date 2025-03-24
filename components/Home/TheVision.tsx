"use client";
import React from "react";
import Image from "next/image";

function TheVision() {
  return (
    <div className="bg-thevision-bg  bg-no-repeat bg-cover  w-full h-[1600px]  flex flex-col justify-between items-center">
      {/* Part 1  */}
      <div className=" pt-52">
        <div className="w-[400px] h-[543px] bg-bee-offwhite flex flex-col items-center sm:w-[860px]">
          <div className=" w-[860px] h-[224px] bg-bee-orange flex justify-center items-center">
            <h1 className="font-[800] font-k2d text-[50px] text-bee-offwhite sm:text-[100px]">
              The Vision
            </h1>
          </div>
          <div className="w-[616px] flex text-center items-center h-[319px]">
            <p className="text-[17px] font-k2d font-normal text-justify sm:text-[20px]">
              To empower individuals with the knowledge and skills to excel in
              the dynamic world of digital marketing, enabling them to build
              successful careers.
            </p>
          </div>
        </div>
      </div>
      {/* Part 2  */}
      <div className="flex">
        <div>
          <h1 className="text-[50px] font-k2d font-[800] uppercase leading-[1] text-bee-offwhite pl-[110px] sm:text-[100px]">
            Aquire The Mindset
            <br /> Of Successful
            <br />
            Digital Marketers
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
