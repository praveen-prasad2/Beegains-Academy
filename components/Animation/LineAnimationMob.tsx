"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

function LineAnimationMob() {
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
        "Exposure to a high energy environment full of  working professionals showcasing their best work  day in day out for national and international  clients. We have writers, graphic artists, animators,  software developers, CGI artists and of course,  seasoned digital marketers.",
      style: {
        left: "28%",
        top: "13%",
      },
    },
    {
      title: "Industry Exposure:",
      description:
        "Forge valuable connections with industry  leaders. Our academy has a strong network  of brands, offering potential exposure and  learning of unmatched quality.",
      style: {
        left: "69%",
        top: "37%",
      },
    },
    {
      title: "Practical, Hands-On Learning:",
      description:
        "Forge valuable connections with industry  leaders. Our academy has a strong network  of brands, offering potential exposure and  learning of unmatched quality.",
      style: {
        left: "83%",
        top: "54%",
      },
    },
    {
      title: "Focus On Innovation & Creativity:",
      description:
        "Stay ahead of the curve with a curriculum that emphasizes  cutting-edge digital marketing trends and technologies. Explore  emerging areas like AI, VR/AR, and influencer marketing.",
      style: {
        left: "22%",
        top: "71%",
      },
    },
    {
      title: "Expert Faculty:",
      description:
        "Learn from experienced industry professionals  who bring real-world expertise to the class room. Our faculty comprises seasoned digital  marketers, strategists, and creative  professionals.",
      style: {
        left: "82%",
        top: "94%",
      },
    },
  ];

  return (
    <div className="line-container  pt-10 relative ">
      {/* Content boxes */}
      <div className="absolute inset-0 w-full h-full font-k2d">
        {reasonsData.map((reason, index) => (
          <div
            key={index}
            className="absolute w-[90%] max-w-[650px] p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10"
            style={reason.style}
          >
            <h3 className="text-[20px] text-bee-offwhite md:text-3xl lg:text-[36px] font-bold mb-2 sm:text-[40px]">
              {reason.title}
            </h3>
            <p className="text-base w-[500px] md:text-lg lg:text-[18px]">
              {reason.description}
            </p>
          </div>
        ))}
      </div>

      {/* SVG Path */}

      <svg
        viewBox="0 0 358 1028"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[358px] h-[1028px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="10" cy="10" r="10" fill="#0081FA" />
        <circle cx="189" cy="187" r="10" fill="#0081FA" />
        <circle cx="348" cy="542" r="10" fill="#0081FA" />
        <circle cx="49" cy="699" r="10" fill="#0081FA" />
        <circle cx="334" cy="1018" r="10" fill="#0081FA" />
        <path
          ref={pathRef}
          d="M9.62793 10C2.71885 102.896 53.5151 149.323 127.859 150.112C220.789 151.098 190.87 235.281 149.595 242.773C108.32 250.265 -1.33907 171.404 13.559 249.279C28.457 327.154 66.2456 367.89 122.608 307.833C183.666 242.773 197.931 296.135 182.191 335.736C164.172 381.073 120.074 410.117 250 424.5C385.5 439.5 372.5 678.5 276 639C152.597 588.488 -109.761 753.925 68.0653 848.075C182.192 908.5 421.5 702 332.5 1022.5"
          stroke="#0081FA"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

export default LineAnimationMob;
