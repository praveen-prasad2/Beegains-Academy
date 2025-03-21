import React from "react";
import Image from "next/image";

function DmProgramOverview() {
  return (
    <div>
      {/* Part 1 */}
      <div>
        {/* Section 1 */}
        <div className="pl-[110px] pr-[110px] flex  items-center gap-[50px]">
          <h1 className="text-bee-blue text-[100px] font-k2d font-[700] leading-[.8]">
            Program <br />
            Overview
          </h1>
          <div className="w-[264px] h-[73px] bg-bee-orange flex items-center justify-center">
            <h1 className="text-[20px] font-k2d text-bee-blue font-[600]">
              Mode : Offline Classes
            </h1>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex justify-center p-5">
          <Image
            src={"/DmProgramcircles.png"}
            width={574}
            height={502}
            alt={"3month course image"}
          />
        </div>

        {/* Section 3 */}

        <div className="pl-[110px] pr-[110px] flex pt-[50px]">
          <h1 className="text-[80px] font-k2d text-bee-blue font-[700] leading-[.9]">
            WHY SHOULD <br /> STUDENTS <br /> JOIN?
          </h1>

          <Image
            src={"/why-man-dmoverview.png"}
            width={662}
            height={425}
            alt={"3month course image"}
          />
        </div>
        <div></div>
      </div>

      {/* Part 2 */}
      <div className="flex flex-col">
        {/* Section 1 */}
        <div className="flex">
          {/* 01& 02 */}
          <div className="flex flex-col w-2/4">
            {/* 01 */}
            <div className=" h-[190px] bg-[#A7A9AC] flex gap-[20px] pl-5 pr-5 justify-between items-center">
              <h1 className="font-k2d text-[120px] font-[900] opacity-[30%] text-white">
                01
              </h1>
              <p className="text-[30px] font-k2d font-[700] text-white leading-[.9]">
                Learn the fundamentals of digital marketing with real-world
                applications
              </p>
            </div>
            {/* 02 */}
            <div className="h-[190px] bg-[#929497] flex gap-[20px] pl-5 pr-5 justify-between items-center">
              <h1 className="font-k2d text-[120px] font-[900] opacity-[30%] text-white">
                02
              </h1>
              <p className="text-[30px] font-k2d font-[700] text-white leading-[.9]">
                Hands-on training with AI-powered marketing tools
              </p>
            </div>
          </div>
          {/* 03& 04 */}
          <div className="flex  w-2/4">
            {/* 03 */}
            <div className=" w-1/2 h-[380px] bg-[#6C6D70] flex flex-col items-center justify-center pl-5 pr-5">
              <h1 className="font-k2d text-[120px] font-[900] opacity-[30%] text-white">
                03
              </h1>
              <p className="text-[30px] font-k2d font-[700] text-white leading-[.9] text-center">
                Enhance employability with industry-recognized skills
              </p>
            </div>
            {/* 04 */}
            <div className=" w-1/2  h-[380px] bg-[#414042] flex flex-col items-center justify-center pl-5 pr-5">
              <h1 className="font-k2d text-[120px] font-[900] opacity-[30%] text-white">
                04
              </h1>
              <p className="text-[30px] font-k2d font-[700] text-white leading-[.9] text-center">
                Build projects and a portfolio for career opportunities
              </p>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className=" w-full  h-[190px] bg-[#57585B] flex  items-center justify-center pl-5 pr-5 gap-5">
          <h1 className="font-k2d text-[120px] font-[900] opacity-[30%] text-white">
            05
          </h1>
          <p className="text-[30px] font-k2d font-[700] text-white leading-[.9] text-center">
            Gain insights from expert instructors with industry experience
          </p>
        </div>
      </div>
      {/* Part 3 */}
      <div className="w-full h-[960px] bg-theresult-bg ">
        <div className="flex flex-col items-center ">
          <h1 className="text-[100px] font-[700] font-k2d text-white">
            The Result
          </h1>
          <div className="flex flex-col gap-5">
            {/* Result 1  */}
            <div className="flex items-center gap-10">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[28px] font-k2d w-[655px] h-[103px]  border-[1.5px] flex justify-start items-center p-5 hover:bg-bee-orange">
                Industry-ready certification in Digital Marketing and content
                strategy
              </p>
            </div>
            {/* Result 2  */}
            <div className="flex items-center gap-10">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[28px] font-k2d w-[655px] h-[103px]  border-[1.5px] flex justify-start items-center p-5 hover:bg-bee-orange">
                Real-world project experience
              </p>
            </div>
            {/* Result 3  */}
            <div className="flex items-center gap-10">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[28px] font-k2d w-[655px] h-[103px]  border-[1.5px] flex justify-start items-center p-5 hover:bg-bee-orange">
                Access to tools and templates for your portfolio
              </p>
            </div>
            {/* Result 4  */}
            <div className="flex items-center gap-10">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[28px] font-k2d w-[655px] h-[103px]  border-[1.5px] flex justify-start items-center p-5 hover:bg-bee-orange">
                Placement assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DmProgramOverview;
