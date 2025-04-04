import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-[740px] flex flex-col bg-footer-bg bg-cover bg-no-repeat  pl-[10px] pr-[10px]  sm:pl-[110px] sm:pr-[110px] overflow-hidden">
      <div className="flex justify-start gap-16 items-center pt-[130px]">
        <h1 className="text-[70px] font-k2d font-[700] text-white leading-[.9]">
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
      <div className="flex flex-col items-center sm:items-end">
        <div>
          <p className="text-[16px] font-k2d font-normal  text-left">
            Phone <br />{" "}
            <span className="text-[20px] font-k2d font-medium">
              +91 782 675 5272
            </span>
          </p>
          <p className="text-[16px] font-k2d font-normal text-left">
            Email ID <br />{" "}
            <span className="text-[20px] font-k2d font-medium">
              beegainsacademy@gmail.com
            </span>
          </p>
        </div>
      </div>
      {/* Social Logos  */}
      <div className="flex gap-[20px]  pt-[50px] justify-center sm:justify-end">
        <Link href={"#"}>
          <FaInstagram size={23} />
        </Link>
        <Link href={"#"}>
          <FaLinkedinIn size={23} />
        </Link>
        <Link href={"#"}>
          <FaXTwitter size={23} />
        </Link>
        <Link href={"#"}>
          <FaFacebookF size={23} />
        </Link>
      </div>
      <div className="flex flex-col pt-[50px]  gap-[50px] justify-between sm:flex-row ">
        <div className="font-k2d text-[18px] flex gap-[20px]">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Vision</Link>
          <Link href={"#"}>Courses</Link>
          <Link href={"#"}>Contact</Link>
        </div>
        <div>
          <p className="font-k2d text-[15px] flex ">
            Copyright © 2025 by BEEGAINS All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
