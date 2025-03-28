import React from "react";
import Image from "next/image";

function Workshop() {
  return (
    <div className="z-50 overflow-hidden">
      {/* part 1 */}
      <div className="w-full h-[580px] pl-[20px] pr-[20px] flex flex-col bg-[#0241CC] sm:pl-[110px] sm:pr-[110px] relative sm:h-screen sm:flex-row ">
        <div className="w-1/2 relative flex flex-col justify-start pt-[50px] z-50 sm:justify-center sm:pt-[0px]">
          <div className="w-[83px] h-[83px] bg-black rounded-[100%] flex justify-center items-center absolute left-[200px] top-[10px] sm:w-[200px] sm:h-[200px] sm:left-[550px] sm:top-[40px]">
            <h1 className="text-bee-offwhite text-[10px] font-semibold font-k2d sm:text-[32px]">
              Exclusive <br />
              exposure:
            </h1>
          </div>
          <h1 className="text-white text-[40px] font-[700] font-k2d leading-[.9] sm:text-[150px] sm:font-[900]">
            <span className="text-white text-[30px] font-[500]  sm:text-[80px] sm:font-[500]">
              Workshops By
            </span>{" "}
            <br /> Industry <br /> Leads
          </h1>
          <div className="w-[254px] sm:w-[457px]">
            <h1 className="text-[20px] text-bee-orange font-k2d font-[600] sm:text-[40px]">
              At Beegains Academy,{" "}
            </h1>
            <p className="text-[13px] text-white font-k2d  sm:text-[20px]">
              You will meet industry professionals, subject matter experts and
              thought leaders who will conduct workshops for you on specific,
              relevant topics. Through such sessions, your knowledge horizons
              will widen and your expertise will develop.
            </p>
          </div>
        </div>
        <div className="flex h-screen absolute w-full z-50">
          <Image
            src={"/workshop-people.svg"}
            width={100}
            height={100}
            // Ensures it scales properly
            objectPosition="right" // Aligns the image towards the right
            alt="bonus-sessions"
            className="absolute left-[60px] w-full h-full sm:left-[162px]"
          />
        </div>
        <div className="w-[120px] h-[120px] absolute bg-[#0241CC] rounded-[18px]  top-[480px] rotate-45 z-40 sm:w-[220px] sm:h-[220px] sm:top-[550px]">
          {" "}
        </div>
      </div>

      {/* part 2 */}
      <div className="w-full h-screen flex flex-col pl-[20px] pr-[20px] justify-normal items-center sm:pl-[110px] sm:pr-[110px] sm:flex-row sm:justify-around">
        {/* section 1 */}
        <div className="flex  w-[426px] gap-3 h-[555px]">
          <Image
            src={"/workshop-vector-1.svg"}
            width={100}
            height={100}
            alt="bonus-sessions"
            className=" w-[15px]  sm:w-[34px] sm:h-[555px]"
          />
          <div className="flex flex-col justify-around leading-[.9] pt-[15px]">
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Client-Agency Equilibrium
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              AI and Ethics
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Performance Marketing & Ad Budget Optimization
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Growth Hacking Techniques
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Sensory Marketing in the Digital Age
            </h1>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex w-[426px] gap-3 h-[555px]">
          <Image
            src={"/workshop-vector-2.svg"}
            width={100}
            height={100}
            alt="bonus-sessions"
            className="w-[15px]  sm:w-[34px] sm:h-[555px]"
          />
          <div className="flex flex-col justify-around leading-[.9] pt-[15px]">
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Digital Marketing for Social Impact and Sustainability
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              WhatsApp & Conversational Marketing
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Influencer Marketing Strategy & Execution
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Metaverse & Web3 Marketing
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[13px] font-[500] sm:text-[28px]">
              Interactive Storytelling Digital Campaigns
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshop;
