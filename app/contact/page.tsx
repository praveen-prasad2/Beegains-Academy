import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function Page() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current as SVGPathElement; // Type assertion
    const pathLength = path.getTotalLength(); // Now recognized

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".line-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="flex flex-row ">
        <div className="flex w-[20%]"></div>

        <div className="line-container flex w-[60%] justify-start items-start">
          <svg
            width="1692"
            height="3411"
            viewBox="0 0 1692 3411"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d="M64.1056 19C31.9443 81.6006 257.192 258.753 712.998 232.631C1360.89 195.501 1292.46 610.046 871.472 496.845C608.619 426.166 -42.9043 429.362 175.588 712.091C351.444 939.648 1115.93 682.495 1191.92 927.875C1267.91 1173.25 426.562 1120.57 621.529 1330.43C816.497 1540.3 1689.42 1277.92 1679.92 1544.82C1670.42 1811.73 22.1138 1714.6 130.595 1977.74C239.077 2240.87 1051.44 2026.17 1161.42 2300.6C1249.41 2520.15 621.529 2409.84 565.035 2609.33C558.202 2657.41 633.228 2736.87 987.992 2670.09C1431.45 2586.6 1280.43 2854.79 1155.48 2894.67C875.505 2984.03 -297.879 2630.11 221.069 3022.05C740.017 3413.99 -225.886 3160.01 58.5855 3394"
              stroke="#0081FA"
              strokeWidth="10"
            />
            <circle cx="60.5" cy="15.5" r="15.5" fill="#0081FA" />
            <circle cx="1191.5" cy="404.5" r="15.5" fill="#0081FA" />
            <circle cx="132.5" cy="616.5" r="15.5" fill="#0081FA" />
            <circle cx="1196.5" cy="950.5" r="15.5" fill="#0081FA" />
            <circle cx="591.5" cy="1285.5" r="15.5" fill="#0081FA" />
            <circle cx="1676.5" cy="1531.5" r="15.5" fill="#0081FA" />
            <circle cx="125.5" cy="1956.5" r="15.5" fill="#0081FA" />
            <circle cx="1168.5" cy="2331.5" r="15.5" fill="#0081FA" />
            <circle cx="562.5" cy="2616.5" r="15.5" fill="#0081FA" />
            <circle cx="62.5" cy="3395.5" r="15.5" fill="#0081FA" />
          </svg>
        </div>
        <div className="flex w-[20%]"></div>
      </div>
    </>
  );
}

export default Page;
