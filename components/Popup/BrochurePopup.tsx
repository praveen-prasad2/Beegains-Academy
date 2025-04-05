"use client";

import { useRef } from "react";
import React from "react";

function BrochurePopup({ onClose }: { onClose: () => void }) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    if (/^\d$/.test(value)) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      event.target.value = "";
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;

    if (event.key === "Backspace" && target.value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="relative w-[337px] h-[485px] bg-white bg-popup-bg bg-cover bg-no-repeat border-black border rounded-[15px] flex flex-col justify-center items-center font-k2d sm:w-[659px] sm:h-[552px]">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl font-bold"
      >
        &times;
      </button>

      <div className="flex flex-col justify-center items-center px-4">
        <h1 className="text-[15px] font-k2d font-[600] text-center sm:text-[20px]">
          Download Our Brochure –<br /> Enter Your Details
        </h1>
        <div className="w-[286px] h-[345px] flex flex-col gap-3 sm:w-[350px] sm:h-[350px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-[285px] h-[38px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[8px] sm:w-[349px] sm:h-[42px]"
            required
          />
          <input
            type="number"
            name="Whatsapp Number"
            placeholder="Whatsapp Number"
            className="w-[285px] h-[38px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[8px] sm:w-[349px] sm:h-[42px]"
            required
          />
          <input
            type="email"
            name="mail"
            placeholder="Mail ID"
            className="w-[285px] h-[38px] p-2 border-2 bg-white bg-opacity-60 border-[#B4B4B4] text-[15px] focus:border-2 focus:outline-none rounded-[8px] sm:w-[349px] sm:h-[42px]"
            required
          />
          <button className="w-[285px] h-[38px] bg-bee-orange rounded-[8px] text-white sm:w-[350px] sm:h-[41px]">
            Send OTP
          </button>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex gap-2">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    className="w-10 h-10 text-center border border-[#B4B4B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-bee-orange appearance-none"
                    onChange={(event) => handleChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                  />
                ))}
            </div>

            <p className="text-sm text-gray-600">
              Didn't Get The OTP?{" "}
              <a href="#" className="text-blue-500">
                Resend
              </a>
            </p>
            <button className="mt-4 w-[190px] h-[38px] bg-bee-orange text-white rounded-[8px] font-semibold hover:bg-orange-600">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrochurePopup;
