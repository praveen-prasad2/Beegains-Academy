import React from "react";
import Image from "next/image";

function ProgramOverview() {
  return (
    <div className="pl-[110px] pr-[110px]">
      <div className="flex gap-[100px] items-center">
        <h1 className="text-[100px] font-[800] text-bee-blue leading-[1]">
          PROGRAM <br />
          OVERVIEW
        </h1>
        <Image src={"/pentool.svg"} width={574} height={502} alt="pentool" className="mt-[-140px]" />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ProgramOverview;
