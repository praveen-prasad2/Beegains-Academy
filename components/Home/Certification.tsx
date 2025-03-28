import React from "react";
import Image from "next/image";

function Certification() {
  return (
    <div>
      {" "}
      {/* Part 3 */}
      <div className="w-full h-screen pt-[50px] relative z-[99]">
        <div className="w-full h-[190px] pl-[20px]  pr-[20px] pb-[10px] bg-center  bg-theresult-bg2 bg-cover bg-no-repeat sm:pl-[110px] sm:pr-[110px] sm:pb-[30px] flex items-end sm:h-[500px] ">
          <h1 className="text-[40px] font-k2d font-[700] leading-[.9] text-white sm:text-[100px]">
            The <br /> Result:
          </h1>
        </div>
        <div className="w-full h-[437px] bg-[#27AAE0] pl-[20px] pr-[20px] flex flex-col  justify-center sm:pl-[110px] sm:pr-[110px]">
          {/* Result 1  */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px]"></div>
            <p className="text-[white] text-[13px] font-k2d    flex justify-start items-center p-5 sm:text-[24px]">
              Master design tools and techniques used by professionals.
            </p>
          </div>
          {/* Result 2  */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px]"></div>
            <p className="text-[white] text-[13px] font-k2d    flex justify-start items-center p-5 sm:text-[24px]">
              Build a professional-grade portfolio showcasing diverse design
              skills.
            </p>
          </div>
          {/* Result 3  */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px]"></div>
            <p className="text-[white] text-[13px] font-k2d    flex justify-start items-center p-5 sm:text-[24px]">
              Gain a strong understanding of branding, creative strategy, and
              UI/UX design.
            </p>
          </div>
          {/* Result 4  */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px]"></div>
            <p className="text-[white] text-[13px] font-k2d    flex justify-start items-center p-5 sm:text-[24px]">
              Learn to use AI tools like MidJourney and DALL-E for creative
              projects.
            </p>
          </div>
          {/* Result 5  */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="w-0 h-0 border-t-[11px] border-b-[11px] border-l-[12px] border-t-transparent border-b-transparent border-l-white animate-slightMove sm:border-t-[22px] sm:border-b-[22px] sm:border-l-[23px]"></div>
            <p className="text-[white] text-[13px] font-k2d    flex justify-start items-center p-5 sm:text-[24px]">
              Develop personal branding and a strong digital presence.
            </p>
          </div>
        </div>
      </div>
      {/* Part 4 */}
      <div className="w-full h-[250px] pl-[20px] pr-[20px]  flex justify-start flex-col  sm:pl-[110px] sm:pr-[110px] sm:justify-center sm:pt-[100px] sm:h-[800px]">
        <div className="relative">
          <Image
            src="/verified.png"
            width={160}
            height={160}
            alt="Verified Badge"
            className="absolute left-[220px] bottom-[30px]  w-[65px] h-[65px]  hover:animate-stamp sm:w-[140px] sm:h-[140px] sm:left-[560px] sm:bottom-[70px]"
          />
          <h1 className="text-[40px] font-k2d font-[700] text-bee-orange sm:text-[100px]">
            Certification
          </h1>
        </div>
        <p className="text-[13px] font-k2d sm:text-[24px]">
          Participants will receive a Certificate of Completion upon finishing
          the coursework. Additionally, those who complete the internship
          successfully will be awarded an Internship Experience Certificate from
          Beegains Academy.
        </p>
      </div>
    </div>
  );
}

export default Certification;
