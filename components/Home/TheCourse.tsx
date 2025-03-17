"use client";
import React from "react";
import Image from "next/image";

function TheCourse() {
  return (
    <div className="w-screen h-auto flex flex-col justify-end">
      <div className="pl-[110px] pr-[110px] pt-[120px]">
        <h1 className="text-[100px] font-k2d font-[800] text-bee-orange">The Course</h1>
        <p className="font-k2d font-normal text-[17px]">
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
