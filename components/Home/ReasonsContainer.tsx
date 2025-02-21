import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function ReasonsContainer() {
  return (
    <>
      <div>
        {/* Section 1 Content  */}
        <div className="flex sm:flex-col">
          <div className="w-2/3">
            <h1 className="text-[58px] font-[700] uppercase leading-[1]">
              We provide Intensive
              <br /> Digital marketing
              <br /> program
            </h1>
            <p className="text-[25px] font-[500] capitalize">
              03 months program with 00 live projects
            </p>
          </div>
          <div className="w-1/3 flex flex-col ">
            <div className="flex flex-col justify-end gap-5 items-end text-justify">
              <p className="capitalize font-[20px] ">
                we offer a comprehensive Intensive Digital Marketing Program
                designed to help businesses establish a strong online presence,
                attract the right audience, and maximize conversions. Our
                program is tailored for startups, small businesses, and
                enterprises looking for data-driven strategies and cutting-edge
                marketing techniques to scale their business effectively.
              </p>

              <Link
                href={"#"}
                className="underline flex gap-2 text-center font-[16px]"
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
        <div></div>
      </div>
    </>
  );
}

export default ReasonsContainer;
