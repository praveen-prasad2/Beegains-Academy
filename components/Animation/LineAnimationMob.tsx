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
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Clean up function to prevent memory leaks
    const cleanup = () => {
      // Kill any active ScrollTrigger instances to prevent duplicates
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    if (!pathRef.current || !containerRef.current) return cleanup;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Initial state - line is invisible
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%", // Start animation when the top of container is 20% from viewport top
        end: "bottom 80%", // End animation when bottom of container is 80% from viewport top
        scrub: 0.5, // Smooth scrubbing, takes 0.5 seconds to catch up to scroll position
        pin: false, // Don't pin the container - this was causing issues
        // markers: true, // For debugging - remove in production
      },
    });

    // Animate the line drawing
    tl.to(path, {
      strokeDashoffset: 0,
      ease: "power1.inOut",
      duration: 1,
    });

    // Add animations for each reason box
    const reasonElements = document.querySelectorAll(".reason-box");
    reasonElements.forEach((el, index) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
        },
        index * 0.2 // Stagger the animations
      );
    });

    return cleanup;
  }, []);

  const reasonsData = [
    {
      title: "The Environment:",
      description:
        "Exposure to a high energy environment full of working professionals showcasing their best work day in day out for national and international clients. We have writers, graphic artists, animators, software developers, CGI artists and of course, seasoned digital marketers.",
      style: { left: "55%", top: "4%" },
      width: "324px",
    },
    {
      title: "Industry Exposure:",
      description:
        "Forge valuable connections with industry leaders. Our academy has a strong network of brands, offering potential exposure and learning of unmatched quality.",
      style: { left: "98%", top: "20%" },
      width: "157px",
    },
    {
      title: "Practical, Hands-On Learning:",
      description:
        "Forge valuable connections with industry  leaders. Our academy has a strong network  of brands, offering potential exposure and  learning of unmatched quality",
      style: { left: "60%", top: "47%" },
      width: "281px",
    },
    {
      title: "Focus On Innovation & Creativity:",
      description:
        "Stay ahead of the curve with a curriculum that emphasizes  cutting-edge digital marketing trends and technologies. Explore  emerging areas like AI, VR/AR, and influencer marketing.",
      style: { left: "64%", top: "63%" },
      width: "271px",
    },
    {
      title: "Expert Faculty:",
      description:
        "Learn from experienced industry professionals  who bring real-world expertise to the class room. Our faculty comprises seasoned digital  marketers, strategists, and creative  professionals",
      style: { left: "50%", top: "84%" },
      width: "310px",
    },
  ];
  return (
    <div ref={containerRef} className="line-container relative min-h-[1200px]">
      {/* Content boxes */}
      <div className="absolute inset-0 w-full h-full font-k2d">
        {reasonsData.map((reason, index) => (
          <div
            key={index}
            className="reason-box absolute w-[90%] max-w-[650px] p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 opacity-0"
            style={reason.style}
          >
            <h3 className="text-[18px] text-bee-offwhite md:text-3xl lg:text-[36px] font-bold mb-2 sm:text-[40px]">
              {reason.title}
            </h3>
            <p
              className="text-[13px] md:text-lg lg:text-[18px]"
              style={{ width: reason.width }}
            >
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
        className="w-full max-w-[358px] h-auto mx-auto"
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
