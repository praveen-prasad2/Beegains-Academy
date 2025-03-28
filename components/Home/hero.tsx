"use client";

import React from "react";

function hero() {
  return (
    <div className="bg-hero-bg bg-top bg-cover bg-no-repeat h-screen w-screen flex flex-row justify-center items-center overflow-hidden">
      <iframe
        allowFullScreen
        scrolling="no"
        className="fp-iframe"
        style={{
          border: "0px",
          width: "100%",
          height: "600px",
          paddingTop: "50px",
        }}
        src="https://heyzine.com/flip-book/a700e1ed16.html?hide=audio"
      ></iframe>
    </div>
  );
}

export default hero;
