"use client";

import React, { useState } from "react";
// import BrochurePopup from "../Popup/BrochurePopup";

function Hero() {
  // const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-hero-bg bg-top bg-cover relative bg-no-repeat h-screen w-full flex flex-row overflow-hidden">
      <iframe
        allowFullScreen
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/cadfcd2976.html"
        style={{ border: "0px", width: "100%", height: "600px" }}
      ></iframe>

      {/* <button
        // onClick={() => setShowPopup(true)}
        className="bg-black text-white w-[175px] h-[52px] rounded-[15px] absolute font-k2d bottom-[150px] right-[110px] hover:bg-bee-orange hover:text-black"
      >
        Download Brochure
      </button> */}

      {/* Popup Modal */}
      {/* {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <BrochurePopup  onClose={() => setShowPopup(false)} />
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-6 right-6 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Hero;
