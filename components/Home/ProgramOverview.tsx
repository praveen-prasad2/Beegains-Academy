"use client";
import React from "react";
import Image from "next/image";

function ProgramOverview() {
  return (
    <div className="w-full ">
      {/* Part 1 */}
      <div className="flex flex-col   pl-[20px] pr-[20px] w-full sm:pl-[110px] sm:pr-[110px] sm:flex-row sm:gap-[100px] sm:items-center">
        <Image
          src={"/Pentool.gif"}
          width={248}
          height={217}
          alt="pentool"
          className="mt-[-99px] block sm:hidden ml-[100px]"
        />
        <h1 className="text-[40px] font-k2d font-[800] text-bee-blue leading-[1] sm:text-[100px]">
          PROGRAM <br />
          OVERVIEW
        </h1>
        <Image
          src={"/Pentool.gif"}
          width={574}
          height={502}
          alt="pentool"
          className="mt-[-230px] hidden sm:block "
        />
      </div>

      {/* Part 2 */}
      <div className="flex justify-center pl-[20px] pr-[20px] items-center pt-[80px] sm:pl-[110px] sm:pr-[110px]">
        <Image
          src={"/progrm-overview.webp"}
          width={574}
          height={502}
          alt="program overview infograph"
        />
      </div>

      {/* Part 3 */}
      <div className="flex flex-col pr-[20px] pl-[20px] justify-between pt-[80px] sm:pl-[110px] sm:pr-[110px] sm:flex-row">
        <div>
          <h1 className="text-[20px] font-k2d font-[800] text-bee-blue  sm:text-[32px]">
            Tools Covered:
          </h1>
          <Image
            src={"/tools-covered.png"}
            width={544}
            height={135}
            alt="tools covered"
          />
        </div>
        <div className="flex flex-col gap-[10px] items-left sm:flex-row sm:gap-[30px]">
          <div className="w-[195px] h-[45px] bg-bee-blue flex justify-center items-center sm:w-[405px] sm:h-[148px]">
            <h1 className="text-[20px] font-k2d font-[800] text-bee-offwhite sm:text-[32px]">
              Bonus Sessions:
            </h1>
          </div>
          <ul className="text-[13px]  font-k2d font-[600] gap-[50px] list-disc pl-[20px] flex flex-row sm:flex-col sm:gap-0 sm:text-[20px]">
            <div>
              <li>Creative Ads</li>
              <li>Personal Branding</li>
            </div>
            <div>
              <li>Creative Strategy</li>
              <li>LinkedIn Masterclass</li>
            </div>
          </ul>
        </div>
      </div>

      {/* Part 4 */}
      <div className="pl-[20px] pr-[20px] flex  flex-col justify-between  sm:flex-row sm:pl-[110px] sm:pr-[110px]">
        <div className="pt-[50px] sm:pt-[80px]">
          <h1 className="text-[20px] font-k2d font-[800] text-bee-blue sm:text-[32px]">
            Out Come:
          </h1>
          <p className="text-[13px]  font-k2d capitalize sm:text-[20px]">
            Build a professional portfolio, understand core design principles,
            and gain hands-on <br />
            experience in UI/UX and creative strategies.
          </p>
        </div>
        <div className="flex  justify-center pt-[80px] ">
          <div className="w-[176px] h-[120px] bg-[#27AAE0] flex justify-center items-center text-right sm:w-[473px] sm:h-[323px]">
            <h1 className="text-[15px] font-k2d font-[800] text-bee-offwhite sm:text-[32px]">
              Placement <br />
              Assistance: <br />
              <span className="text-[24px] font-k2d font-[600] text-bee-offwhite sm:text-[45px]">
                YES!
              </span>{" "}
            </h1>
            <Image
              src={"/smiley.webp"}
              width={120}
              height={120}
              alt="Smiley"
              className="mt-[70px] w-[65px] h-[65px] sm:w-[130px] sm:h-[130px] sm:mt-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramOverview;
