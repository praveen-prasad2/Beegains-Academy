"use client";

import Image from "next/image";

import { toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    contact: "",
    whatsappnumber: "",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Mobile number validation
    if (
      formData.contact.length < 10 ||
      formData.whatsappnumber.length < 10 ||
      !/^\d+$/.test(formData.contact) ||
      !/^\d+$/.test(formData.whatsappnumber)
    ) {
      toast("Please enter valid 10-digit phone numbers.", { icon: "📱" });
      return;
    }
  
    try {
      const res = await fetch("/api/send-student-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      if (result.success) {
        toast("Thank you! We'll respond shortly.", {
          icon: <FaCheckCircle size={20} className="text-bee-orange" />,
          style: {
            background: "#fff",
            color: "#000",
            fontWeight: "bold",
          },
        });
  
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast("Something went wrong!", { icon: "❌" });
      }
    } catch (error) {
      toast("Server error. Try again later.", { icon: "⚠️" });
    }
  };

  return (
    <div className="w-full h-auto flex flex-col pt-[50px] pl-[20px] pr-[20px]  sm:flex-row sm:pt-[110px] sm:pl-[110px] sm:pr-[110px]">
      <div className="sm:w-2/3">
        <h1 className="text-[45px] sm:text-[70px] font-k2d font-[800] leading-[.8]">
          Enroll Your <br />
          Courses Today –<br />{" "}
          <span className=" text-[20px] sm:text-[30px]  font-[600}">
            Take the Next Step in Your Career!
          </span>{" "}
        </h1>
        <br />
        <p className="text-[13px] font-k2d sm:text-[20px] capitalize">
          Register Now for Flexible Learning – Online & offline class are
          Available. <br className=" hidden sm:block" /> Unlock new skills and
          boost your career with our expert-led courses.
        </p>

        {/* contact Form  */}

        <div className=" pt-[50px]  flex bg-contact-page-bg bg-contain  bg-no-repeat bg-center sm:bg-none sm:pb-[110px]">
          <form onSubmit={handleSubmit} className="space-y-4 font-k2d">
            <div className="flex flex-wrap gap-5">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
              />
              <input
                type="text"
                name="secondname"
                placeholder="Second Name"
                value={formData.secondname}
                onChange={handleChange}
                className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                required
              />
              <input
                type="tel"
                name="whatsappnumber"
                placeholder="Whatsapp Number"
                value={formData.whatsappnumber}
                onChange={handleChange}
                className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                required
              />
              <input
                type="text"
                name="place"
                placeholder="Your Place"
                value={formData.place}
                onChange={handleChange}
                className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60  border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] sm:w-[360px] sm:h-[46px]"
                required
              />
              {/* select Boxes  */}

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className=" w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] cursor-pointer sm:w-[360px] sm:h-[46px]"
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
                value={formData.classType || ""}
                onChange={handleChange}
                className="w-[353px] h-[41px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] cursor-pointer sm:w-[360px] sm:h-[46px]"
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
              value={formData.message}
              onChange={handleChange}
              className="w-[353px] h-[64px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[15px] cursor-pointer sm:w-[747px] sm:h-[100px]"
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

      {/* Part 2 */}
      <div className="w-full pb-[100px] sm:w-1/3">
        <Image
          src="/contact-page-vector.svg"
          alt="Contact Page vector"
          width={500}
          height={500}
          className="hidden sm:block"
        />
        <div className="flex pt-[40px] items-center sm:items-end gap-5 sm:pt-[40px]">
          <Link href={"/corporate-enquiry"}>
            {" "}
            <button className="text-[12px] w-[130px] h-[42px] text-white font-k2d bg-black sm:w-[162px] sm:h-[52px] sm:text-[20px] rounded-[20px]">
              {" "}
              Click Here
            </button>
          </Link>

          <span className="text-[13px] sm:text-[20] font-k2d">
            For Corporate enquiry
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page;
