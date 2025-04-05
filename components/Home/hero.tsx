"use client";

import React from "react";

function hero() {
  return (
    <div className="bg-hero-bg bg-top bg-cover bg-no-repeat h-screen w-full flex flex-row overflow-hidden">
      <iframe
        allowFullScreen
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/cadfcd2976.html"
        style={{ border: "0px", width: "100%", height: "600px" }}
      ></iframe>
    </div>
  );
}

export default hero;
