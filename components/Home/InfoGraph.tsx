"use client";
import React from "react";
import Image from "next/image";

function InfoGraph() {
  return (
    <div>
      {/* Part 1  */}
      <div className="flex flex-col  h-screen w-screen">
        <div className="flex justify-center">
          <Image
            src={"/bee-academy-info.png"}
            width={484}
            height={258}
            alt="the course animated image"
          />
        </div>
        <div className="flex gap-10 justify-center pt-[80px] pb-[80px]">
          {[
            {
              id: "01",
              image: "/Lamp.gif",
              text: "Know The Secrets Of Industry Leading Digital Marketers.",
            },
            {
              id: "02",
              image: "/Search.gif",
              text: "Take The Data Driven Path.",
            },
            {
              id: "03",
              image: "/perfomance.gif",
              text: "Creativity distinguishes you from your competition.",
            },
            {
              id: "04",
              image: "/Graph.gif",
              text: "Real-time learning from the industry.",
            },
          ].map((info) => (
            <div key={info.id} className="flex flex-col items-center group">
              <div className="   relative">
                <div className="absolute right-[90px] top-[1px] z-[99]">
                  <h1 className="text-[20px] font-k2d font-semibold w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-bee-orange shadow-2xl">
                    {info.id}
                  </h1>
                </div>
              </div>
              {/* <div className="w-[363px] h-[91px] bg-gray-300   shadow-lg z-10"></div> */}

              <div className="w-[250px] h-[349px] bg-bee-orange rounded-[50px] shadow-2xl flex flex-col justify-around items-center p-2 text-center transition-transform transform group-hover:scale-105 duration-300">
                <Image
                  src={info.image}
                  width={150}
                  height={150}
                  alt="infographic image"
                  unoptimized
                />
                <p className="text-[20px] font-k2d">{info.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Part 2  */}
      <div className="w-full h-[728px] bg-[#fcf2e9] flex items-center justify-between pl-[110px] pr-[110px] pt-[50px]">
        <h1 className="text-[100px] font-k2d leading-[1] font-[800] text-[#0241cc]">
          THE <br />
          EXCITEMENT
          <br /> BEGINS
        </h1>
        <div className="">
          <Image
            src={"/steps.png"}
            width={929}
            height={820}
            alt="the course animated image"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoGraph;
