import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Footer() {
  return (
    <div className="h-[682px] w-screen bg-footer-bg bg-cover bg-no-repeat">
      <div>
        {" "}
        <Image
          src={"/footer-logo.png"}
          width={219}
          height={80}
          alt="the course animated image"
        />
        {/* Social Logos  */}
        <div>
          <FaInstagram />
          <FaLinkedinIn />
          <FaFacebookF />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
