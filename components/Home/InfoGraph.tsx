"use client";
import React from "react";
import Image from "next/image";

function InfoGraph() {
  return (
    <div>
      {/* Part 1  */}
      <div className="flex flex-col  h-screen w-full">
        {/* Header  */}
        <div className="flex justify-center pt-[80px] relative">
          <div className=" relative flex w-full h-auto justify-center items-center">
            <div className="flex flex-col gap-[10px] sm:gap-[30px]">
              <h1 className="text-[15px] font-k2d font-[700] sm:text-[32px]">
                Exclusive Benefits of
              </h1>
              <Image
                src={"/academy-logo.svg"}
                width={360}
                height={120}
                alt="the course animated image"
                className="w-[166px] h-[56px]   sm:w-[360px] sm:h-[120px]"
              />
            </div>
            <Image
              src={"/benefit-vector.webp"}
              width={103}
              height={91}
              alt="the course animated image"
              className="w-[100px] h-[100px] absolute right-[70px] bottom-[18px] sm:right-[440px] sm:bottom-[40px]  sm:w-[224px] sm:h-[224px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap  gap-10 justify-center pt-[80px] pb-[80px] sm:flex-row">
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
                <div className="absolute  right-[50px] top-[-20px]  sm:right-[90px] sm:top-[1px] z-[99]">
                  <h1 className=" text-[15px]  font-k2d font-semibold w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-bee-orange shadow-2xl sm:text-[20px] sm:w-[60px] sm:h-[60px]">
                    {info.id}
                  </h1>
                </div>
              </div>
              {/* <div className="w-[363px] h-[91px] bg-gray-300   shadow-lg z-10"></div> */}

              <div className="w-[146px] h-[203px] bg-bee-orange rounded-[18px] shadow-2xl flex flex-col justify-around items-center p-2 text-center transition-transform transform group-hover:scale-105 duration-300 sm:w-[250px] sm:h-[349px] sm:rounded-[50px]">
                <Image
                  src={info.image}
                  width={150}
                  height={150}
                  alt="infographic image"
                  className="w-[70px] h-[70px] sm:w-[150px] sm:h-[150px]"
                  unoptimized
                />
                <p className="text-[13px] sm:text-[20px] font-k2d">
                  {info.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Part 2  */}
      <div className="w-full h-[600px] pl-[20px] pr-[20px] bg-[#fcf2e9] flex flex-col items-center justify-between sm:pl-[110px] sm:pr-[110px] pt-[50px] sm:flex-row sm:h-screen">
        <h1 className="text-[50px] font-k2d leading-[1] font-[800] text-[#0241cc] sm:text-[100px]">
          THE <br />
          EXCITEMENT
          <br /> BEGINS
        </h1>
        <div className="w-full h-full flex items-end justify-end">
          <Image
            src={"/steps.webp"}
            width={503}
            height={556}
            alt="the course animated image"
            className="w-full h-[400px] sm:w-[829px] sm:h-[620px]"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoGraph;
