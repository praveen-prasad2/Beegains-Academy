"use client";
import React from "react";
import Image from "next/image";

function ProgramOverview() {
  return (
    <div className="w-screen">
      {/* Part 1 */}
      <div className="flex gap-[100px] items-center pl-[110px] pr-[110px] w-screen">
        <h1 className="text-[100px] font-[800] text-bee-blue leading-[1]">
          PROGRAM <br />
          OVERVIEW
        </h1>
        <Image
          src={"/pentool.svg"}
          width={574}
          height={502}
          alt="pentool"
          className="mt-[-140px]"
        />
      </div>
      {/* Part 2 */}
      <div className="flex justify-center items-center pt-[80px] pl-[110px] pr-[110px]">
        <Image
          src={"/progrm-overview.svg"}
          width={1029}
          height={365}
          alt="program overview infograph"
        />
      </div>
      {/* Part 3 */}
      <div className="flex justify-between pt-[80px] pl-[110px] pr-[110px]">
        <div>
          <h1 className="text-[32px] font-[800] text-bee-blue">
            Tools Covered:
          </h1>
          <Image
            src={"/tools-covered.png"}
            width={544}
            height={135}
            alt="tools covered"
          />
        </div>
        <div className="flex gap-[100px] items-center">
          <div className="w-[405px] h-[148px] bg-bee-blue flex justify-center items-center">
            <h1 className="text-[32px] font-[800] text-bee-offwhite">
              Bonus Sessions:
            </h1>
          </div>
          <ul className="text-[20px] font-[600] list-disc">
            <li>Creative Ads</li>
            <li>Personal Branding</li>
            <li>Creative Strategy</li>
            <li>LinkedIn Masterclass</li>
          </ul>
        </div>
      </div>
      {/* Part 4 */}
      <div className="pl-[110px] pr-[110px]">
        <div className="pt-[80px]">
          <h1 className="text-[32px] font-[800] text-bee-blue">Out Come:</h1>
          <p className="text-[20px] capitalize">
            Build a professional portfolio, understand core design principles,
            and gain hands-on <br />
            experience in UI/UX and creative strategies.
          </p>
        </div>
        <div className="flex justify-center pt-[80px]">
          <div className="w-[473px] h-[323px] bg-bee-blue flex  justify-center items-center text-right">
            <h1 className="text-[32px] font-[800] text-bee-offwhite">
              Course Fee: <br />
              <span className="text-[45px] font-[600] text-bee-offwhite">
                ₹ 40,000
              </span>{" "}
              <br />+ tax
            </h1>
          </div>
          <div className="w-[473px] h-[323px] bg-[#27AAE0] flex justify-center items-center text-right">
            <h1 className="text-[32px] font-[800] text-bee-offwhite">
              Placement <br />
              Assistance: <br />
              <span className="text-[45px] font-[600] text-bee-offwhite">
                YES!
              </span>{" "}
            </h1>
            <Image
              src={"/smiley.svg"}
              width={80}
              height={80}
              alt="Smiley"
              className="mt-[200px]"
            />
          </div>
        </div>
      </div>
      {/* Part 5 */}
      <div>
        <Image
          src={"/group-of-people.png"}
          width={1296}
          height={865}
          alt="Smiley"
          className="mt-[200px]"
        />
      </div>
    </div>
  );
}

export default ProgramOverview;
