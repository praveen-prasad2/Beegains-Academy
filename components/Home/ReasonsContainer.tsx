"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import Image from "next/image";
import LineAnimation from "../Animation/LineAnimation"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

function ReasonsContainer() {
  return (
    <div className="flex flex-col gap-[100px] pl-[110px] h-auto bg-line-container-bg bg-cover bg-repeat">
      {/* Section 2 and Line Animation */}
      <div className="w-screen ">
        <Image
          src={"/beegains-academy-logo3.png"}
          width={400}
          height={180}
          alt="Smiley"
          className="mt-[200px]"
        />

        <h1 className="text-[20px] leading-[1] capitalize sm:text-[25px] font-k2d">
          Here are a few reasons why you should choose{" "}
          <span className="text-black font-[700]">Beegains Academy</span>
        </h1>
      </div>

      <LineAnimation />
    </div>
  );
}

export default ReasonsContainer;
