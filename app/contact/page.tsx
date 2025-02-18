"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function Page() {
  const pathRef = useRef<SVGPathElement | null>(null); // Reference to path

  useEffect(() => {
    if (!pathRef.current) return; // Ensure pathRef is not null

    const path = pathRef.current;
    const pathLength = path.getTotalLength(); // Get path length

    // Set initial stroke properties
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate stroke drawing
    gsap.to(path, {
      strokeDashoffset: 0, // Draw the path
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: path,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Smooth animation while scrolling
      },
    });
  }, []);

  return (
    <div>
      <svg
        width="1685"
        height="3382"
        viewBox="0 0 1685 3382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef} // Reference to path element
          d="M64.1056 3C31.9443 65.6006 257.192 242.753 712.998 216.631C1360.89 179.501 1292.46 594.046 871.472 480.845C608.619 410.166 -42.9043 413.362 175.588 696.091C351.444 923.648 1115.93 666.495 1191.92 911.875C1267.91 1157.25 426.562 1104.57 621.529 1314.43C816.497 1524.3 1689.42 1261.92 1679.92 1528.82C1670.42 1795.73 22.1138 1698.6 130.595 1961.74C239.077 2224.87 1051.44 2010.17 1161.42 2284.6C1249.41 2504.15 621.529 2393.84 565.035 2593.33C558.202 2641.41 633.228 2720.87 987.992 2654.09C1431.45 2570.6 1280.43 2838.79 1155.48 2878.67C875.505 2968.03 -297.879 2614.11 221.069 3006.05C740.017 3397.99 -225.886 3144.01 58.5855 3378"
          stroke="#0081FA"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}

export default Page;
