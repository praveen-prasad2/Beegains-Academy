"use client";
import React from "react";
import Image from "next/image";

function InfoGraph() {
  return (
    <div>
      {/* Part 1  */}
      <div className="flex flex-col justify-around h-screen w-screen">
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

          <div className="flex flex-col  items-center">
            <div className="w-[100px] h-[50px] bg-bee-orange rounded-t-full flex justify-center items-center">
              <h1 className="text-[20px] font-k2d font-semibold text-white">
                01
              </h1>
            </div>
            <div className="w-[363px] h-[91px] bg-white shadow-2xl z-10"></div>
            <div className="w-[288px] h-[349px] bg-white rounded-b-[50px] shadow-2xl">
              <Image
                src={"/infograph1.svg"}
                width={150}
                height={150}
                alt="the course animated image"
              />

              <p className="text-[20px] font-k2d">
                Know The Secrets Of Industry Leading Digital Marketers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Part 2  */}
      <div className="w-full h-[728px] bg-[#fcf2e9] flex items-center justify-between pl-[110px] pr-[110px]">
        <h1 className="text-[100px] font-k2d leading-[1] font-[800] text-[#0241cc]">
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
