"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

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
            <h3 className="text-[40px] text-bee-offwhite md:text-3xl lg:text-[36px] font-bold mb-2 ">
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
        viewBox="0 0 1007 1236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[850px] h-[1200px]"
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
          strokeWidth="12"
        />
      </svg>
    </div>
  );
}

export default ReasonsContainer;
