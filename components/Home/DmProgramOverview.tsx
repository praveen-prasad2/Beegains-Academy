import React from "react";
import Image from "next/image";

function DmProgramOverview() {
  return (
    <div>
      {/* Part 1 */}
      <div className="pt-[50px]">
        {/* Section 1 */}
        <div className="pl-[20px] pr-[20px] flex  items-center gap-[50px] sm:pl-[110px] sm:pr-[110px]">
          <h1 className="text-bee-blue text-[40px]  font-k2d font-[700] leading-[.8] sm:text-[100px]">
            Program <br />
            Overview
          </h1>
          <div className="w-[117px] h-[24px]  p-[5px] bg-bee-orange flex items-center justify-center sm:w-[264px] sm:h-[73px] sm:p-[10px]">
            <h1 className="text-[10px]  sm:text-[20px] font-k2d text-bee-blue font-[600]">
              Mode : Offline Classes
            </h1>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex justify-center pt-[20px] pr-[20px] pl-[20px]">
          <Image
            src={"/DmProgramcircles.png"}
            width={574}
            height={502}
            alt={"3month course image"}
            className="w-[371px] h-full  sm:w-[574px] sm:h-full"
          />
        </div>

        {/* Section 3 */}

        <div className="pl-[20px] pr-[20px] flex pt-[50px] sm:pl-[110px] sm:pr-[110px]">
          <h1 className="text-[30px]  font-k2d text-bee-blue font-[700] leading-[.9] sm:text-[80px]">
            WHY SHOULD <br /> STUDENTS <br /> JOIN?
          </h1>

          <Image
            src={"/why-man-dmoverview.png"}
            width={662}
            height={425}
            alt={"3month course image"}
            className="w-[182px] h-[111px] sm:w-[662px] sm:h-[405px]"
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
            <div className=" w-full h-[98px] bg-[#A7A9AC] flex gap-5 pl-5 pr-5 justify-between items-center sm:w-full sm:h-[190px] sm:gap-[20px]">
              <h1 className="font-k2d text-[40px]  font-[900] opacity-[30%] text-white sm:text-[120px]">
                01
              </h1>
              <p className="text-[13px] font-k2d font-[600] w-[155px] text-white leading-[1] sm:text-[30px] sm:w-full sm:font-[700] ">
                Learn the fundamentals of digital marketing with real-world
                applications
              </p>
            </div>
            {/* 02 */}
            <div className=" w-full h-[98px] bg-[#929497] flex gap-5 pl-5 pr-5 justify-between items-center sm:w-full sm:h-[190px] sm:gap-[20px]">
              <h1 className="font-k2d text-[40px]  font-[900] opacity-[30%] text-white sm:text-[120px]">
                02
              </h1>
              <p className="text-[13px] font-k2d font-[600] w-[155px] text-white leading-[1] sm:text-[30px] sm:w-full sm:font-[700]">
                Hands-on training with AI-powered marketing tools
              </p>
            </div>
          </div>
          {/* 03& 04 */}
          <div className="flex  w-2/4">
            {/* 03 */}
            <div className=" w-1/2 h-[196px] bg-[#6C6D70] flex flex-col items-center justify-center pl-5 pr-5 sm:h-[380px]">
              <h1 className="font-k2d text-[40px] font-[900] opacity-[30%] text-white am:text-[120px]">
                03
              </h1>
              <p className="text-[13px]  font-k2d font-[700] w-[93px] h-[75px] text-white leading-[1] text-center sm:w-[320px] sm:h-[120px] sm:text-[30px]">
                Enhance employability with industry-recognized skills
              </p>
            </div>
            {/* 04 */}
            <div className=" w-1/2  h-[196px] bg-[#414042] flex flex-col items-center justify-center pl-5 pr-5 sm:h-[380px]">
              <h1 className="font-k2d text-[40px] font-[900] opacity-[30%] text-white am:text-[120px]">
                04
              </h1>
              <p className="text-[13px]  font-k2d font-[700] w-[93px] h-[75px] text-white leading-[1] text-center sm:w-[320px] sm:h-[120px] sm:text-[30px]">
                Build projects and a portfolio for career opportunities
              </p>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className=" w-full  h-[98px] bg-[#57585B] flex  items-center justify-center pl-5 pr-5 gap-5 sm:w-full  sm:h-[190px]">
          <h1 className="font-k2d text-[40px]  font-[900] opacity-[30%] text-white sm:text-[120px]">
            05
          </h1>
          <p className="text-[13px]  font-k2d font-[700] text-white leading-[.9] text-center sm:text-[30px]">
            Gain insights from expert instructors with industry experience
          </p>
        </div>
      </div>

      {/* Part 3 */}
      <div className="w-full h-[533px] sm:h-screen bg-theresult-bg flex justify-center">
        <div className="flex flex-col items-center justify-center pl-[20px] pr-[20px]">
          <h1 className="text-[40px] font-[700] font-k2d text-white sm:text-[100px]">
            The Result:
          </h1>
          <div className="flex flex-col gap-5">
            {/* Result 1  */}
            <div className="flex items-center gap-5 sm:gap-10">
              <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px] "></div>
              <p className="text-[white] text-[13px] font-k2d w-[269px] h-[46px]  border-[1.5px] flex justify-start items-center p-2 hover:bg-bee-orange sm:text-[28px] sm:w-[655px] sm:h-[103px] sm:p-5">
                Industry-ready certification in Digital Marketing and content
                strategy
              </p>
            </div>
            {/* Result 2  */}
            <div className="flex items-center gap-5 sm:gap-10">
              <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px] "></div>
              <p className="text-[white] text-[13px] font-k2d w-[269px] h-[46px]  border-[1.5px] flex justify-start items-center p-2 hover:bg-bee-orange sm:text-[28px] sm:w-[655px] sm:h-[103px] sm:p-5">
                Real-world project experience
              </p>
            </div>
            {/* Result 3  */}
            <div className="flex items-center gap-5 sm:gap-10">
              <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px] "></div>
              <p className="text-[white] text-[13px] font-k2d w-[269px] h-[46px]  border-[1.5px] flex justify-start items-center p-2 hover:bg-bee-orange sm:text-[28px] sm:w-[655px] sm:h-[103px] sm:p-5">
                Access to tools and templates for your portfolio
              </p>
            </div>
            {/* Result 4  */}
            <div className="flex items-center gap-5 sm:gap-10">
              <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px] "></div>
              <p className="text-[white] text-[13px] font-k2d w-[269px] h-[46px]  border-[1.5px] flex justify-start items-center p-2 hover:bg-bee-orange sm:text-[28px] sm:w-[655px] sm:h-[103px] sm:p-5">
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
