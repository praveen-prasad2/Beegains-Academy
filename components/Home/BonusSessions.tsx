import React from "react";
import Image from "next/image";

function BonusSessions() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex flex-col pt-[200px] sm:flex-row ">
          {/* Part 1 */}
          <div className="w-1/2 flex flex-col">
            <div className="pl-[20px] pr-[20px] flex flex-col justify-center relative sm:pl-[110px] sm:pr-[110px]">
              {/* Black Circle  */}
              <div className="w-[83px] h-[83px] bg-black rounded-[100%] flex justify-center items-center absolute left-[150px] bottom-[30px] sm:w-[250px] sm:h-[250px] sm:left-[400px] sm:bottom-[80px]">
                <h1 className="text-bee-offwhite text-[10px] font-semibold font-k2d sm:text-[32px]">
                  Integrated <br />
                  Throughout
                </h1>
              </div>
              <h1 className="text-[40px] font-k2d font-bold text-bee-orange leading-[.9] sm:text-[100px]">
                Bonus <br /> Sessions
              </h1>
            </div>
            <div className="relative ">
              <Image
                src={"/bonus-sessions-vector.svg"}
                width={700}
                height={741}
                alt="bonus-sessions"
                className="absolute  top-[-40px] left-[170px]  sm:left-0  sm:top-[40px]"
              />
            </div>
          </div>

          {/* Part 2 */}

          <div className="w-screen pl-[20px] pb-[60px] pr-[20px] pt-[150px] z-[99] flex  flex-wrap justify-center gap-5 sm:pr-[110px]  sm:w-1/2 sm:pt-0   ">
            {/* card 1  */}
            <div className="w-[146px] h-[203px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect sm:w-[285px] sm:h-[347px]">
              <h1 className="text-[15px] font-[700] font-k2d sm:text-[28px]">
                Creative Ads <br />
                Workshop:
              </h1>
              <li className="text-[13px] text-left  font-k2d sm:text-center sm:text-[20px]">
                Learn to create engaging and impactful ad campaigns
              </li>
            </div>
            {/* card 2  */}
            <div className="w-[146px] h-[203px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect sm:w-[285px] sm:h-[347px]">
              <h1 className="text-[15px] font-[700] font-k2d sm:text-[28px]">
                Personal <br /> Branding:
              </h1>
              <li className="text-[13px] text-left  font-k2d sm:text-center sm:text-[20px]">
                Design personal logos, business cards, and portfolios.
              </li>
            </div>
            {/* card 3  */}
            <div className="w-[146px] h-[203px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect sm:w-[285px] sm:h-[347px]">
              <h1 className="text-[15px] font-[700] font-k2d sm:text-[28px]">
                Creative <br /> Strategy:
              </h1>
              <li className="text-[13px] text-left  font-k2d sm:text-center sm:text-[20px]">
                Crafting effective strategies tailored to client needs and
                industries.
              </li>
            </div>
            {/* card 4  */}
            <div className="w-[146px] h-[203px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect sm:w-[285px] sm:h-[347px]">
              <h1 className="text-[15px] font-[700] font-k2d sm:text-[28px]">
                LinkedIn <br /> Masterclass::
              </h1>
              <li className="text-[13px] text-left  font-k2d sm:text-center sm:text-[20px]">
                Leverage LinkedIn to showcase your work and grow your profes
                sional network.
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BonusSessions;
