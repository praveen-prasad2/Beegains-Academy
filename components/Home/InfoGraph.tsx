"use client";
import React from "react";
import Image from "next/image";

function InfoGraph() {
  return (
    <div>
      {/* Part 1  */}
      <div className="flex flex-col justify-around h-screen">
        <div className="flex justify-center">
          <Image
            src={"/bee-academy-info.png"}
            width={484}
            height={258}
            alt="the course animated image"
          />
        </div>
        <div className="flex gap-10 justify-center">
          <Image
            src={"/infograph1.png"}
            width={345}
            height={536}
            alt="the course animated image"
          />
          <Image
            src={"/infograph2.png"}
            width={345}
            height={536}
            alt="the course animated image"
          />
          <Image
            src={"/infograph3.png"}
            width={345}
            height={536}
            alt="the course animated image"
          />
          <Image
            src={"/infograph4.png"}
            width={345}
            height={536}
            alt="the course animated image"
          />
        </div>
      </div>
      {/* Part 2  */}
      <div className="w-full h-[728px] bg-[#fcf2e9] flex items-center justify-between pl-[110px] pr-[110px]">
        <h1 className="text-[100px] leading-[1] font-[800] text-[#0241cc]">
          THE <br />
          EXCITEMENT
          <br /> BEGINS
        </h1>
        <Image
          src={"/steps.png"}
          width={100}
          height={728}
          alt="the course animated image"
        />
      </div>
    </div>
  );
}

export default InfoGraph;
