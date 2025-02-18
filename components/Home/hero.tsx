import React from "react";

function hero() {
  return (
    <div className="bg-[url('/hero-bg.png')] bg-top bg-cover bg-no-repeat h-screen w-full flex flex-row justify-between items-center">
      <div className="w-[20%]">div1</div>
      <div className="w-[60%]">
        <iframe
          allowFullScreen
          scrolling="no"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/a700e1ed16.html?double=1"
          style={{ border: "0px", width: "100%", height: "800px" }}
        ></iframe>
      </div>
      <div className="w-[20%]">div3</div>
    </div>
  );
}

export default hero;
