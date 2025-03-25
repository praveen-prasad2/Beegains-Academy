"use client";

import Image from "next/image";

import { toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";

import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    companyname: "",
    companymail: "",
    companycontact: "",
    companywebsite: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    toast("Thank you! We'll respond shortly.", {
      icon: <FaCheckCircle size={20} className="text-bee-orange" />,
      style: {
        background: "#fff", // Orange
        color: "#000",
        fontWeight: "bold",
      },
    });
  };
  return (
    <>
      <div className="pl-[20px] pr-[20px] pt-[50px] sm:pl-[110px] sm:pr-[110px]">
        <h1 className="text-[45px] sm:text-[70px] font-k2d font-[800] leading-[.9]">
          Have a Corporate Query?
          <br /> Contact Us Today
        </h1>
      </div>
      <div className="w-full h-auto flex flex-col  pl-[20px] pr-[20px]  sm:flex-row sm:pt-[110px] sm:pl-[110px] sm:pr-[110px]">
        {/* Part 1 */}
        <div className="w-full pb-[30px] sm:w-1/2">
          <Image
            src="/corporate-enquiry-vector.svg"
            alt="corporate enquiry vector"
            width={400}
            height={400}
            className="hidden sm:block"
          />
        </div>
        {/* Part 2 */}
        <div className="sm:w-2/3">
          {/* contact Form  */}

          <div className=" pt-[50px] pb-[50px]  flex bg-corporate-enquiry-bg bg-contain  bg-no-repeat bg-center sm:bg-none sm:pb-[110px]">
            <form onSubmit={handleSubmit} className="space-y-4 font-k2d">
              <div className="flex flex-wrap gap-5">
                <input
                  type="text"
                  name="companyname"
                  placeholder="Company Name"
                  value={formData.companyname}
                  onChange={handleChange}
                  className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-80 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                />

                <input
                  type="email"
                  name="companymail"
                  placeholder="Email ID"
                  value={formData.companymail}
                  onChange={handleChange}
                  className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-80 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                  required
                />
                <input
                  type="tel"
                  name="companycontact"
                  placeholder="Contact Number"
                  value={formData.companycontact}
                  onChange={handleChange}
                  className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-80  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                  required
                />
                <input
                  type="text"
                  name="companywebsite"
                  placeholder="Your Website URL"
                  value={formData.companywebsite}
                  onChange={handleChange}
                  className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-80  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-[353px] h-[64px] p-2 border-2 bg-white bg-opacity-80 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] cursor-pointer sm:w-[747px] sm:h-[100px]"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-[353px] h-[41px] bg-bee-orange text-[15px] text-white py-2 rounded-[10px] sm:w-[747px]  sm:h-[63px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
