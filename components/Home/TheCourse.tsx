"use client";
import React from "react";
import Image from "next/image";

function TheCourse() {
  return (
    <div className="w-screen h-auto flex flex-col justify-end gap-10">
      <div className="pl-[20px] pr-[20px] pt-[50px] sm:pl-[110px] sm:pr-[110px] sm:pt-[120px]">
        <h1 className="text-[50px] font-k2d font-[800] text-bee-orange sm:text-[100px]">
          The Course
        </h1>
        <p className="text-[13px] font-k2d font-normal sm:text-[17px] text-justify">
          This comprehensive digital marketing course aims to empower
          individuals with the knowledge and skills necessary to thrive in the
          dynamic digital landscape. By providing a learning experience that
          covers all aspects of the field, from fundamental concepts to advanced
          strategies, the course seeks to cultivate a generation of innovative
          and results-oriented digital marketers. The ultimate goal is to equip
          individuals with the tools and expertise to build successful careers,
          while fostering a deep understanding and practical application of the
          field. As you will see, this is an in-depth course that demands your
          utmost dedication.
        </p>
      </div>
      <div>
        <Image
          src={"/the-course-animated.gif"}
          width={2000}
          height={446}
          alt="the course animated image"
        />
      </div>
    </div>
  );
}

export default TheCourse;
