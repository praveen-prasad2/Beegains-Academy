import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function ReasonsContainer() {
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
      <div className="flex flex-col gap-[100px]">
        {/* Section 1 Content  */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
          <div className="w-full  sm:w-2/3">
            <h1 className="text-[28px] font-[700] uppercase leading-[1] sm:text-[58px]">
              We provide Intensive
              <br /> Digital marketing
              <br /> program
            </h1>
            <p className=" text-[13px]  font-[500] capitalize sm:text-[25px]">
              03 months program with 00 live projects
            </p>
          </div>
          <div className="w-full  sm:w-1/3 flex flex-col">
            <div className="flex flex-col justify-end gap-5 items-end text-justify">
              <p className="font-[13px]  capitalize sm:font-[20px] ">
                we offer a comprehensive Intensive Digital Marketing Program
                designed to help businesses establish a strong online presence,
                attract the right audience, and maximize conversions. Our
                program is tailored for startups, small businesses, and
                enterprises looking for data-driven strategies and cutting-edge
                marketing techniques to scale their business effectively.
              </p>

              <Link
                href={"#"}
                className=" font-[13px] underline flex gap-2 text-center sm:font-[16px]"
              >
                <p className="flex items-center gap-2">
                  Learn more about this
                  <GoArrowRight />
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2 and Line Animation  */}
        <div>
          <h1 className="text-[50px] leading-[1] capitalize ">
            Here are a few reasons why you <br /> should choose{" "}
            <span className="text-bee-orange font-[700]">Beegains Academy</span>
          </h1>

          <div className="line-container">
            <svg
              width="1007"
              height="1236"
              viewBox="0 0 1007 1236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                stroke-width="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReasonsContainer;
