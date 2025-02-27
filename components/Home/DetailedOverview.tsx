"use client";
import React from "react";

function DetailedOverview() {
  return (
    <div className="w-[screen] h-[1800px] bg-detailed-bg bg-cover bg-no-repeat pl-[110px] pr-[110px] flex justify-between">
      {/* Part 1  */}
      <div className="flex flex-col justify-center">
        {/* Month 1  */}

        <div>
          <h1 className="text-[36px] text-bee-orange font-[700] ">Month 1</h1>
          <h1 className="text-[36px] text-bee-offwhite font-[600] ">
            Foundation Building
          </h1>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 1:</span> Introduction to Graphic
            Design & Tools (10 hours){" "}
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 2:</span> Layout & Composition (10
            hours){" "}
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 3:</span> Typography (10 hours){" "}
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 4:</span> Color Theory (10 hours){" "}
          </p>
        </div>
        {/* Month 2  */}
        <div className="mt-[50px] mb-[50px]">
          <h1 className="text-[36px] text-bee-orange font-[700] ">Month 2</h1>
          <h1 className="text-[36px] text-bee-offwhite font-[600] ">
            Design Specialization
          </h1>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 5:</span> Branding Design and
            Communication (10 hours){" "}
          </p>

          {/* Bonus 1  */}
          <div className="pt-[30px] pb-[30px]">
            <p className="text-[24px] text-bee-offwhite font-[400] border border-bee-offwhite  p-3 w-[607px]">
              <span className="font-[600]">Bonus Session:</span> Creative
              Strategy (2 hours) design strategies tailored to client
              objectives.
            </p>
          </div>

          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 6:</span> Creative Design
            Techniques (10 hours)
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 7:</span> Manipulation and
            Composition (10 hours)
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 8:</span> UI/UX Fundamentals (10
            hours)
          </p>

          {/* Bonus 2  */}
          <div className="pt-[30px] pb-[30px]">
            <p className="text-[24px] text-bee-offwhite font-[400] border border-bee-offwhite  p-3 w-[840px]">
              <span className="font-[600]">Bonus Session:</span> LinkedIn
              Masterclass (2 hours) <br /> How to showcase UI/UX skills and
              network in the design industry.
            </p>
          </div>
        </div>

        {/* Month 3  */}

        <div>
          <h1 className="text-[36px] text-bee-orange font-[700] ">Month 3</h1>
          <h1 className="text-[36px] text-bee-offwhite font-[600] ">
            Foundation Building
          </h1>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 9:</span> Advanced UI/UX Designing
            (10 hours)
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 10:</span> Creative Strategy (10
            hours)
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 11:</span> Personal Branding (10
            hours)
          </p>
          <p className="text-[24px] text-bee-offwhite font-[400] ">
            <span className="font-[600]">Week 12:</span> Real-world Projects &
            Reviews (10 hours)
          </p>

          {/* Bonus 3  */}
          <div className="pt-[30px] pb-[30px]">
            <p className="text-[24px] text-bee-offwhite font-[400] border border-bee-offwhite  p-3 w-[729px]">
              <span className="font-[600]">Bonus Session:</span> Creative
              Strategy Wrap-up (2 hours)
              <br />
              Presenting a portfolio that highlights strategic thinking.
            </p>
          </div>
        </div>
      </div>
      {/* Part 2  */}
      <div className="pt-[80px]">
        <h1 className="text-[100px] text-bee-offwhite font-[800] leading-[.9] uppercase">
          Program <br />
          Overview
        </h1>
        <div className="w-[264px] h-[58px] bg-bee-orange flex justify-center items-center">
          <p className="text-[20px] text-bee-blue font-[600]">
            Mode : Offline , Mon-Fri
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailedOverview;
