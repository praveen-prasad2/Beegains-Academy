"use client";
import React from "react";
import Hero from "../components/Home/hero";
import ReasonsContainer from "@/components/Home/ReasonsContainer";
import TheVision from "@/components/Home/TheVision";
import TheCourse from "@/components/Home/TheCourse";
import Design from "@/components/Home/Design";
import UnderstandDm from "@/components/Home/UnderstandDm";
import InfoGraph from "@/components/Home/InfoGraph";
import ProgramOverview from "@/components/Home/ProgramOverview";
import IntensiveDm from "@/components/Home/IntensiveDm";
import BonusSessions from "@/components/Home/BonusSessions";
import DmProgramOverview from "@/components/Home/DmProgramOverview";

function page() {
  return (
    <div>
      <Hero />
      <ReasonsContainer />
      <TheVision />
      <InfoGraph />
      <IntensiveDm />
      <TheCourse />
      <UnderstandDm />
      <DmProgramOverview />
      <Design />
      <ProgramOverview />
      <BonusSessions />
    </div>
  );
}

export default page;
