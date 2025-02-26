"use client";
import React from "react";
import Hero from "../components/Home/hero";
import ReasonsContainer from "@/components/Home/ReasonsContainer";
import TheVision from "@/components/Home/TheVision";
import TheCourse from "@/components/Home/TheCourse";
import Design from "@/components/Home/Design";
import UnderstandDm from "@/components/Home/UnderstandDm";
import InfoGraph from "@/components/Home/InfoGraph";

function page() {
  return (
    <div>
      <Hero />
      <ReasonsContainer />
      <TheVision />
      <TheCourse/>
      <UnderstandDm />
      <InfoGraph/>
      <Design/>
    </div>
  );
}

export default page;
