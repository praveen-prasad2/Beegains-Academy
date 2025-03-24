"use client";

import Image from "next/image";

import { toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";

import React, { useState } from "react";

function page() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    place: "",
    course: "",
    classType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", FormData);
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
    <div className="w-full h-auto flex  pt-[110px] pl-[110px] pr-[110px]">
      <div className="w-2/3">
        <h1 className="text-[70px] font-k2d font-[800] leading-[.8]">
          Enroll Your <br />
          Courses Today –<br />{" "}
          <span className="text-[30px]  font-[600}">
            Take the Next Step in Your Career!
          </span>{" "}
        </h1>
        <br />
        <p className="font-k2d text-[20px]">
          Register Now for Flexible Learning – Online & offline class are
          Available. <br /> Unlock new skills and boost your career with our
          expert-led courses.
        </p>

        {/* contact Form  */}

        <div className=" pt-[50px] pb-[110px]">
          <form onSubmit={handleSubmit} className="space-y-4 font-k2d">
            <div className="flex flex-wrap gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={FormData.name}
                onChange={handleChange}
                className="w-[360px] h-[46px] p-2 border-2  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={FormData.email}
                onChange={handleChange}
                className="w-[360px] h-[46px] p-2 border-2  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px]"
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={FormData.contact}
                onChange={handleChange}
                className="w-[360px] h-[46px] p-2 border-2  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px]"
                required
              />
              <input
                type="text"
                name="place"
                placeholder="Your Place"
                value={FormData.place}
                onChange={handleChange}
                className="w-[360px] h-[46px] p-2 border-2  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px]"
                required
              />
              {/* select Boxes  */}

              <select
                name="course"
                value={FormData.course}
                onChange={handleChange}
                className="w-[360px] h-[46px] p-2 border-2  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] cursor-pointer"
              >
                <option value="" disabled className="text-gray-400">
                  Course
                </option>
                <option value="digital-marketing" className="cursor-pointer">
                  Digital Marketing
                </option>
                <option value="chatgpt">ChatGPT</option>
                <option value="tally">Tally</option>
              </select>

              <select
                name="classType"
                value={FormData.classType || ""}
                onChange={handleChange}
                className="w-[360px] h-[46px] p-2 border-2 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] cursor-pointer"
              >
                <option value="" disabled>
                  Class Type
                </option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={FormData.message}
              onChange={handleChange}
              className="w-[747px] h-[100px] p-2 border-2  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] cursor-pointer"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-[747px] h-[63px] bg-bee-orange text-[15px] text-white py-2 rounded-[10px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Part 2 */}
      <div className="w-1/3">
        <Image
          src="/contact-page-vector.svg"
          alt="Contact Page vector"
          width={500}
          height={500}
        />
        <div className="flex items-end gap-5 pt-[40px]">
          <button className="text-[20px] text-white font-k2d bg-black w-[162px] h-[52px] rounded-[20px]">
            {" "}
            Click Here
          </button>
          <span className="text-[20] font-k2d">For Corporate enquiry</span>
        </div>
      </div>
    </div>
  );
}

export default page;
