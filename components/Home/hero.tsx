"use client";

import React from "react";

function hero() {
  return (
    <div className=" bg-top bg-cover bg-no-repeat h-screen w-screen flex flex-row justify-between items-center">
      <div className="w-[20%]"></div>
      <div className="w-[60%]">
        <iframe
          allowFullScreen
          scrolling="no"
          className="fp-iframe"
          style={{ border: "0px", width: "100%", height: "900px" }}
          src="https://heyzine.com/flip-book/a700e1ed16.html"
        />
      </div>
      <div className="w-[20%]"></div>
    </div>
  );
}

export default hero;
