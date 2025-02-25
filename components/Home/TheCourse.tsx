import { div } from "framer-motion/client";
import React from "react";

function TheCourse() {
  return (
    <div className="w-screen h-[1200px] flex flex-col justify-end">
      <div className="pl-[110px] pr-[110px]">
        <h1 className="text-[100px] font-[800] text-bee-orange">The Course</h1>
        <p>
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
        <img src="/the-course.png" alt="" />
      </div>
    </div>
  );
}

export default TheCourse;
