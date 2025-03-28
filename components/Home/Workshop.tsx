import React from "react";
import Image from "next/image";

function Workshop() {
  return (
    <div>
      {/* part 1 */}
      <div className="w-full h-screen flex flex-row bg-[#0241CC] pl-[110px] pr-[110px] relative ">
        <div className="w-1/2 relative flex flex-col justify-center z-50">
          <div className="w-[83px] h-[83px] bg-black rounded-[100%] flex justify-center items-center absolute left-[130px] bottom-[30px] sm:w-[200px] sm:h-[200px] sm:left-[620px] sm:top-[130px]">
            <h1 className="text-bee-offwhite text-[10px] font-semibold font-k2d sm:text-[32px]">
              Exclusive <br />
              exposure:
            </h1>
          </div>
          <h1 className="text-white text-[150px] font-[900] font-k2d leading-[.9]">
            <span className="text-white text-[80px] font-[500]  ">
              Workshops by
            </span>{" "}
            <br /> industry <br /> leads
          </h1>
          <div>
            <h1 className="text-[40px] text-bee-orange font-k2d font-[600]">
              At Beegains Academy,{" "}
            </h1>
            <p className="text-[20px] text-white font-k2d w-[457px]">
              You will meet industry professionals, subject matter experts and
              thought leaders who will conduct workshops for you on specific,
              relevant topics. Through such sessions, your knowledge horizons
              will widen and your expertise will develop.
            </p>
          </div>
        </div>
        <div className="flex h-screen absolute w-full ">
          <Image
            src={"/workshop-people.svg"}
            width={100}
            height={100}
            // Ensures it scales properly
            objectPosition="right" // Aligns the image towards the right
            alt="bonus-sessions"
            className="absolute left-[162px] w-full h-full"
          />
        </div>
        <div className="w-[220px] h-[220px] absolute bg-[#0241CC] rounded-[18px] top-[550px] rotate-45 z-40">
          {" "}
        </div>
      </div>
      {/* part 2 */}
      <div className="w-full h-screen flex pl-[110px] pr-[110px] justify-around items-center">
        {/* section 1 */}
        <div className="flex w-[426px] gap-3 h-[555px]">
          <Image
            src={"/workshop-vector-1.svg"}
            width={100}
            height={100}
            alt="bonus-sessions"
            className=" w-[34px] h-[555px]"
          />
          <div className="flex flex-col justify-around leading-[.9] pt-[15px]">
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              Client-Agency Equilibrium
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              AI and Ethics
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              Performance Marketing & Ad Budget Optimization
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              Growth Hacking Techniques
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
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
            className=" w-[34px] h-[555px]"
          />
          <div className="flex flex-col justify-around leading-[.9] pt-[15px]">
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              Digital Marketing for Social Impact and Sustainability
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              WhatsApp & Conversational Marketing
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              Influencer Marketing Strategy & Execution
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              Metaverse & Web3 Marketing
            </h1>
            <h1 className="text-[#6B6B6B] font-k2d text-[28px] font-[500]">
              Interactive Storytelling Digital Campaigns
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshop;
