import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full  flex flex-col h-[650px] bg-footer-bg-mob  bg-cover bg-no-repeat bg-center  pl-[10px] pr-[10px] sm:h-[740px] sm:pl-[110px] sm:pr-[110px] sm:bg-footer-bg overflow-hidden">
      <div className="flex justify-start gap-16 items-center pt-[130px]">
        <h1 className="text-[70px] hidden font-k2d font-[700] text-white leading-[.9] sm:block">
          JOIN <br />
          NOW <br />
          AND <br /> BECOME <br /> A PRO.
        </h1>
        <Image
          src={"/footer-logo.png"}
          width={698}
          height={259}
          alt="the course animated image"
        />
      </div>
      <div className="flex font-k2d text-[18px] pt-[100px] pb-[20px]  gap-[20px] pl-[20px] sm:hidden">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>About Us</Link>
        <Link href={"#"}>Vision</Link>
        <Link href={"#"}>Courses</Link>
        <Link href={"#"}>Contact</Link>
      </div>
      <div className="flex  flex-row sm:flex-col pl-[20px] pr-[20px] justify-between">
        <div className="flex flex-col  sm:flex-col">
          <div className="flex flex-col  sm:items-end">
            <div>
              <p className="text-[12px] font-k2d font-normal  text-left sm:text-[16px]">
                Phone <br />{" "}
                <span className="text-[15px] font-k2d font-medium sm:text-[20px]">
                  +91 782 675 5272
                </span>
              </p>
              <p className="text-[12px] font-k2d font-normal text-left sm:text-[16px]">
                Email ID <br />{" "}
                <span className="text-[15px] font-k2d font-medium sm:text-[20px]">
                  beegainsacademy@gmail.com
                </span>
              </p>
            </div>
          </div>
          {/* Social Logos  */}
          <div className="flex gap-[20px]  pt-[50px]  sm:justify-end">
            <Link href={"#"}>
              <FaInstagram size={23} />
            </Link>
            <Link href={"#"}>
              <FaLinkedinIn size={23} />
            </Link>

            <Link href={"#"}>
              <FaFacebookF size={23} />
            </Link>
          </div>
          <div className="flex flex-col pt-[10px]  gap-[10px] justify-between sm:flex-row ">
            <div className="hidden font-k2d text-[18px]  sm:gap-[20px] sm:flex ">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Vision</Link>
              <Link href={"#"}>Courses</Link>
              <Link href={"#"}>Contact</Link>
            </div>
            <div>
              <p className="font-k2d text-[10px] flex sm:text-[15px]">
                Copyright © 2025 by BEEGAINS All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end ">
          <h1 className="text-[28px] block font-k2d font-[700] text-white leading-[.9] sm:hidden">
            JOIN <br />
            NOW <br />
            AND <br /> BECOME <br /> A PRO.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
