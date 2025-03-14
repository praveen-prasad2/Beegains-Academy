import React from "react";
import Image from "next/image";

function BonusSessions() {
  return (
    <div className="flex flex-col">
      <div className="pl-[110px] pr-[110px]">
        <h1 className="text-[100px] font-k2d font-bold text-bee-orange">
          Bonus Sessions
        </h1>
      </div>
      <div className="pl-[110px] pr-[110px] flex justify-center ">
        {/* Black Circle  */}
        <div className="w-[317px] h-[317px] bg-black rounded-[100%] flex justify-center items-center">
          <h1 className="text-bee-offwhite text-[40px] font-semibold font-k2d">
            Integrated <br />
            Throughout
          </h1>
        </div>
      </div>

      <div className="relative w-[1500px] h-[741px]">
        <Image
          src={"/bonus-sessions.png"}
          width={1500}
          height={741}
          alt="Smiley"
          className=""
        />
      </div>
    </div>
  );
}

export default BonusSessions;
