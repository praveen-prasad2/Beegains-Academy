"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function FixedSocial() {
  return (
    <div className="fixed right-[40px] bottom-[20px] w-[44px] h-[87px] sm:w-[72px ] sm:h-[143px]">
      <div className="w-[44px] h-[87px]  bg-bee-offwhite bg-opacity-8 0 rounded-[50px] flex flex-col justify-evenly items-center sm:w-[72px] sm:h-[143px] ">
        <Link href={"#"}>
          <Image
            src={"/whatsapp.svg"}
            width={50}
            height={50}
            alt={"Whatsapp Button"}
            className="w-[36px] h-[36px] sm:h-[60px] sm:w-[60px]"
          />
        </Link>

        <Link href={"#"}>
          <Image
            src={"/call.svg"}
            width={60}
            height={60}
            alt={"Call Button"}
            className="w-[36px] h-[36px] sm:h-[60px] sm:w-[60px]"
          />
        </Link>
      </div>
    </div>
  );
}

export default FixedSocial;
