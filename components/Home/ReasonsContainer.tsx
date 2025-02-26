"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

function ReasonsContainer() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current as SVGPathElement;
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".line-container",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  const reasonsData = [
    {
      title: "The Environment:",
      description:
        "Exposure to a high energy environment full of working professionals showcasing their best work, day in day out for passionate tech professionals.",
      style: {
        left: "20%",
        top: "6%",
      },
    },
    {
      title: "Industry Exposure:",
      description:
        "Forge valuable connections with industry leaders, offering potential exposure and learning of unmatched quality.",
      style: {
        left: "94%",
        top: "35%",
      },
    },
    {
      title: "Practical, Hands-On Learning:",
      description:
        "Deep hands-on experience with industry-standard tools and real-world projects.",
      style: {
        left: "79%",
        top: "55%",
      },
    },
    {
      title: "Focus On Innovation & Creativity:",
      description:
        "Stay ahead of the curve with a curriculum that emphasizes cutting-edge digital marketing trends and technologies.",
      style: {
        left: "50%",
        top: "76%",
      },
    },
    {
      title: "Expert Faculty:",
      description:
        "Learn from experienced industry professionals who bring real-world expertise to the classroom.",
      style: {
        left: "88%",
        top: "102%",
      },
    },
  ];

  return (
    <div className="flex flex-col gap-[100px] pt-52 pl-[110px] ">
      {/* Section 1 Content */}
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
        <div className="w-full sm:w-2/3">
          <h1 className="text-[28px] font-[700] uppercase leading-[1] sm:text-[58px]">
            Intensive
            <br /> Digital
            <br /> marketing
            <br /> program
          </h1>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col">
          {/* 3 Month class  */}

          <div className="flex items-center">
            {/* left bar */}
            <div className="bg-bee-orange text-black font-medium px-4 py-2  w-[260px] h-[55px] flex items-center">
              <span className="font-semibold">Mode:</span> Offline Classes
            </div>
            {/* circle */}
            <div className="ml-[-25px]">
              <Image
                src={"/half-circle.svg"}
                width={280}
                height={280}
                alt={"3month course image"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 and Line Animation */}
      <div className="">
        <h1 className="text-[20px] leading-[1] capitalize sm:text-[50px]">
          Here are a few reasons why you <br /> should choose{" "}
          <span className="text-[#FFA500] font-[700]">Beegains Academy</span>
        </h1>

        <div className="line-container pt-10 sm:pt-10 relative">
          {/* Content boxes */}
          <div className="absolute inset-0 w-full h-full">
            {reasonsData.map((reason, index) => (
              <div
                key={index}
                className="absolute w-[90%] max-w-[450px] p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10"
                style={reason.style}
              >
                <h3 className="text-2xl md:text-3xl lg:text-[36px] font-bold mb-2">
                  {reason.title}
                </h3>
                <p className="text-base md:text-lg lg:text-[20px]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* SVG Path */}
          <svg
            viewBox="0 0 1007 1236"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="15.5" cy="15.5" r="15.5" fill="#0081FA" />
            <circle cx="757.5" cy="388.5" r="15.5" fill="#0081FA" />
            <circle cx="991.5" cy="630.5" r="15.5" fill="#0081FA" />
            <circle cx="682.5" cy="882.5" r="15.5" fill="#0081FA" />
            <circle cx="960.5" cy="1220.5" r="15.5" fill="#0081FA" />
            <path
              ref={pathRef}
              d="M18.4991 24C-7.50037 110 203.1 287 507.5 289C888 291.5 765.5 505 596.5 524C427.5 543 -21.5 343 39.5 540.5C100.5 738 255.225 841.312 486 689C736 524 968 531 991.5 644C1015 757 512 811 736 1001C915.2 1153 956 1213.67 954 1225"
              stroke="#0081FA"
              strokeWidth="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ReasonsContainer;
