import React from "react";
import Image from "next/image";

function IntensiveDm() {
  return (
    <div className="pl-[110px] pr-[110px] w-screen h-[860px] bg-intensive-bg bg-cover bg-no-repeat">
      {" "}
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
        <div className="w-full sm:w-2/3">
          <h1 className=" text-[33px]  font-k2d font-bold  uppercase leading-[1] sm:text-[100px] text-white">
            Intensive
            <br /> Digital
            <br /> marketing
            <br /> program
          </h1>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col">
          {/* 3 Month class  */}

          <div className="flex items-center">
            {/* left bar */}
            <div className="bg-bee-orange text-black  font-medium px-4 py-2  w-[260px] h-[55px] flex items-center">
              <span className="font-semibold">Mode:</span> Offline Classes
            </div>
            {/* circle */}
            <div className="ml-[-25px]">
              <Image
                src={"/half-circle.svg"}
                width={280}
                height={280}
                alt={"3month course image"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntensiveDm;
