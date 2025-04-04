"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import Image from "next/image";
import LineAnimation from "../Animation/LineAnimation";
import LineAnimationMob from "../Animation/LineAnimationMob";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

function ReasonsContainer() {
  return (
    <div className="flex flex-col h-[1480px] justify-center gap-[100px] pl-[20px] pr-[20px] bg-line-container-bg bg-cover bg-repeat sm:h-[1800px] overflow-hidden sm:pl-[110px]">
      {/* Section 2 and Line Animation */}
      <div className="w-full">
        <Image
          src={"/beegains-academy-logo4.png"}
          width={450}
          height={175}
          alt="Smiley"
          className="mt-[0px] w-[196px] h-[72px] sm:w-[450px] sm:h-[175px]"
        />

        <h1 className="text-[15px] leading-[1] capitalize sm:text-[25px] font-k2d ">
          Here are a few reasons why you should choose{" "}
          <span className="text-black font-[700]">Beegains Academy</span>
        </h1>
      </div>

      <div className="hidden sm:block">
        <LineAnimation />
      </div>
      <div className="block sm:hidden">
        <LineAnimationMob />
      </div>
    </div>
  );
}

export default ReasonsContainer;
