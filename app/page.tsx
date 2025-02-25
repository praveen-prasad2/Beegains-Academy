"use client";
import React from "react";
import Hero from "../components/Home/hero";
import ReasonsContainer from "@/components/Home/ReasonsContainer";
import TheVision from "@/components/Home/TheVision";

function page() {
  return (
    <div>
      <Hero />
      <ReasonsContainer />
      <TheVision />
    </div>
  );
}

export default page;
