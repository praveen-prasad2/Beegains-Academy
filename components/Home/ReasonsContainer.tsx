import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function ReasonsContainer() {
  return (
    <>
      <div>
        <div className="flex">
          <div className="w-2/3">
            <h1 className="text-[58px] font-[700] uppercase">
              We provide Intensive
              <br /> Digital marketing
              <br /> program
            </h1>
            <p className="text-[25px] font-[500] capitalize">
              03 months program with 00 live projects
            </p>
          </div>
          <div className="w-1/3 flex flex-col ">
            <div className="flex flex-col justify-end">
              <p>
                we offer a comprehensive Intensive Digital Marketing Program
                designed to help businesses establish a strong online presence,
                attract the right audience, and maximize conversions. Our
                program is tailored for startups, small businesses, and
                enterprises looking for data-driven strategies and cutting-edge
                marketing techniques to scale their business effectively.
              </p>
              <Link href={"#"} className="underline flex gap-2 text-center font-[16px]">
                Learn more about this
                <GoArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReasonsContainer;
