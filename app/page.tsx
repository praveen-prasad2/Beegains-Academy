"use client";
import React from "react";
import Hero from "../components/Home/hero";
import ReasonsContainer from "@/components/Home/ReasonsContainer";
import Contact from "../app/contact/page";

function page() {
  return (
    <div>
      <Hero />
      <ReasonsContainer />
      <Contact />
    </div>
  );
}

export default page;
