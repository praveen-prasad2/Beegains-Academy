"use client";

import React from "react";

function Certification() {
  return (
    <div className="w-full h-screen font-k2d  pt-[80px]">
      {/* Part 1 */}
      <div className="flex flex-row justify-between  bg-[#fff] pl-[110px]">
        {/* Enrollment Form */}

        {/* Imgae and content  */}

        <div className="w-[961px] h-[744px] bg-enrollment-bg bg-cover bg-no-repeat flex flex-col justify-end gap-[30px] pl-[50px] pb-[50px]">
          <h1 className="text-[80px] font-[700] leading-[1] capitalize text-bee-offwhite">
            Enroll Your <br />
            Courses Today –
          </h1>
          <h1 className="text-[40px] font-[700] leading-[1] capitalize text-bee-offwhite">
            Take the Next Step in Your Career!
          </h1>
          <p className="text-[20px] text-bee-offwhite w-[799px]">
            Register Now for Flexible Learning – Online & offline class are
            Available. Unlock new skills and boost your career with our
            expert-led courses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certification;
