"use client";
import { toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";

import React, { useState } from "react";
import Image from "next/image";

function Certification() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    place: "",
    course: "",
    classType: "Online",
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
    <div className="w-full h-screen  pt-[80px]">
      {/* Part 1 */}
      <div className="pl-[110px] pr-[110px]">
        <div className="flex flex-row gap-[10px] ">
          <div className="h-[240px] flex items-end">
            <h1 className="text-[110px] text-bee-blue font-[800]">
              Certification
            </h1>
          </div>
          <div className="h-[200px] flex items-start">
            <Image
              src="/verified.png"
              width={160}
              height={160}
              alt="Verified Badge"
            />
          </div>
        </div>

        <p className="text-[20px]">
          Participants will receive a Certificate of Completion upon finishing
          the coursework. Additionally, those who complete the internship
          successfully will be awarded an Internship Experience Certificate from
          Beegains Academy.
        </p>
      </div>

      {/* Part 2 */}
      <div className="flex flex-row justify-between  bg-[#fff] pl-[110px]">
        {/* Enrollment Form */}
        <div className="">
          <div className="max-w-lg mx-auto mt-10 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-[527px] p-2 border-b-2 border-bee-black text-[20px] focus:border-b-2 focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="w-[527px] p-2 border-b-2 border-bee-black text-[20px] focus:border-b-2 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="w-[527px] p-2 border-b-2 border-bee-black text-[20px] focus:border-b-2 focus:outline-none"
                required
              />
              <input
                type="text"
                name="place"
                placeholder="Your Place"
                value={formData.place}
                onChange={handleChange}
                className="w-[527px] p-2 border-b-2 border-bee-black text-[20px] focus:border-b-2 focus:outline-none"
                required
              />
              {/* select Boxes  */}
              <div className="flex justify-between w-[527px]">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-[251px] p-2 border-b-2 border-bee-black text-[20px] focus:border-b-2 focus:outline-none"
                >
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="chatgpt">ChatGPT</option>
                  <option value="tally">Tally</option>
                </select>
                <select
                  name="classType"
                  value={formData.classType}
                  onChange={handleChange}
                  className="w-[251px] p-2 border-b-2 border-bee-black text-[20px] focus:border-b-2 focus:outline-none"
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-[536px] p-2 border-b-2 border-bee-black text-[20px] focus:border-b-2 focus:outline-none"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-[536px] h-[63px] bg-bee-orange text-[20px] text-white py-2 rounded-[10px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
  
        {/* Imgae and content  */}

        <div className="w-[961px] h-[744px] bg-enrollment-bg bg-cover bg-no-repeat flex flex-col justify-end gap-[30px] pl-[50px] pb-[50px]">
          <h1 className="text-[80px] font-[700] leading-[1] capitalize text-bee-offwhite">
            Enroll Your <br />
            Courses Today –
          </h1>
          <h1 className="text-[40px] font-[700] leading-[1] capitalize text-bee-offwhite">
            Take the Next Step in Your Career!
          </h1>
          <p className="text-[20px] text-bee-offwhite w-[799px]">
            Register Now for Flexible Learning – Online & offline class are
            Available. Unlock new skills and boost your career with our
            expert-led courses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certification;
