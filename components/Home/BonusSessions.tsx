import React from "react";
import Image from "next/image";

function BonusSessions() {
  return (
    <>
      <div>
        <div className="flex flex-row pt-[200px]">
          {/* Part 1 */}
          <div className="w-1/2 flex flex-col">
            <div className="pl-[110px] pr-[110px] flex flex-col justify-center relative">
              {/* Black Circle  */}
              <div className="w-[250px] h-[250px] bg-black rounded-[100%] flex justify-center items-center absolute left-[400px] bottom-[80px] ">
                <h1 className="text-bee-offwhite text-[32px] font-semibold font-k2d">
                  Integrated <br />
                  Throughout
                </h1>
              </div>
              <h1 className="text-[100px] font-k2d font-bold text-bee-orange leading-[.9]">
                Bonus <br /> Sessions
              </h1>
            </div>
            <div className="relative">
              <Image
                src={"/bonus-sessions-vector.svg"}
                width={700}
                height={741}
                alt="bonus-sessions"
                className="absolute z-[90] top-[40px]"
              />
            </div>
          </div>

          {/* Part 2 */}

          <div className="w-1/2 pr-[110px] flex flex-wrap gap-5 ">
            {/* card 1  */}
            <div className="w-[285px] h-[347px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect">
              <h1 className="text-[28px] font-[700] font-k2d">
                Creative Ads <br />
                Workshop:
              </h1>
              <li className="text-[20px]  font-k2d text-center">
                Learn to create engaging and impactful ad campaigns
              </li>
            </div>
            {/* card 2  */}
            <div className="w-[285px] h-[347px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect">
              <h1 className="text-[28px] font-[700] font-k2d">
                Creative Ads <br />
                Workshop:
              </h1>
              <li className="text-[20px]  font-k2d text-center">
                Learn to create engaging and impactful ad campaigns
              </li>
            </div>
            {/* card 3  */}
            <div className="w-[285px] h-[347px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect">
              <h1 className="text-[28px] font-[700] font-k2d">
                Creative Ads <br />
                Workshop:
              </h1>
              <li className="text-[20px]  font-k2d text-center">
                Learn to create engaging and impactful ad campaigns
              </li>
            </div>

            {/* card 4  */}
            <div className="w-[285px] h-[347px] bg-bee-orange rounded-[10px] flex flex-col justify-start items-center p-7 hover:animate-hoverEffect">
              <h1 className="text-[28px] font-[700] font-k2d">
                Creative Ads <br />
                Workshop:
              </h1>
              <li className="text-[20px]  font-k2d text-center">
                Learn to create engaging and impactful ad campaigns
              </li>
            </div>
          </div>
        </div>
        {/* Part 3 */}
        <div className="w-full h-screen pt-[50px] relative z-[99]">
          <div className="w-full h-[300px] bg-[#23293C] pl-[110px] pr-[110px] pb-[30px] flex items-end ">
            <h1 className="text-[100px] font-k2d font-[700] leading-[.9] text-bee-orange">
              The <br /> Result:
            </h1>
          </div>
          <div className="w-full h-[437px] bg-[#3B4464] pl-[110px] pr-[110px] flex flex-col justify-center">
            {/* Result 1  */}
            <div className="flex items-center gap-5">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[24px] font-k2d    flex justify-start items-center p-5 ">
                Master design tools and techniques used by professionals.
              </p>
            </div>
            {/* Result 2  */}
            <div className="flex items-center gap-5">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[24px] font-k2d    flex justify-start items-center p-5 ">
                Build a professional-grade portfolio showcasing diverse design
                skills.
              </p>
            </div>
            {/* Result 3  */}
            <div className="flex items-center gap-5">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[24px] font-k2d    flex justify-start items-center p-5 ">
                Gain a strong understanding of branding, creative strategy, and
                UI/UX design.
              </p>
            </div>
            {/* Result 4  */}
            <div className="flex items-center gap-5">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[24px] font-k2d    flex justify-start items-center p-5 ">
                Learn to use AI tools like MidbJourney and DALL-E for creative
                projects.
              </p>
            </div>
            {/* Result 5  */}
            <div className="flex items-center gap-5">
              <div className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[23px] border-t-transparent border-b-transparent border-l-white animate-slightMove"></div>
              <p className="text-[white] text-[24px] font-k2d    flex justify-start items-center p-5 ">
                Develop personal branding and a strong digital presence.
              </p>
            </div>
          </div>
        </div>

        {/* Part 4 */}

        <div className="w-full h-[800px] pl-[110px] pr-[110px] flex flex-col justify-center ">
          <div className="relative">
            <Image
              src="/verified.png"
              width={160}
              height={160}
              alt="Verified Badge"
              className="absolute left-[560px]  bottom-[80px] hover:animate-stamp"
            />
            <h1 className="text-[100px] font-k2d font-[700] text-bee-orange ">
              Certification
            </h1>
          </div>
          <p className="text-[24px] font-k2d">
            Participants will receive a Certificate of Completion upon finishing
            the coursework. Additionally, those who complete the internship
            successfully will be awarded an Internship Experience Certificate
            from Beegains Academy.
          </p>
        </div>
      </div>
    </>
  );
}

export default BonusSessions;
