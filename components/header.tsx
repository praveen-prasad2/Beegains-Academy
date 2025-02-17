"use client";

import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", href: "#", icon: "/home.svg" },
    { name: "About", href: "#", icon: "/about.svg" },
    { name: "Course", href: "#", icon: "/course.svg" },
  ];

  return (
    <div className="flex flex-row justify-between items-center p-4">
      {/* Logo */}
      <div>
        <img src="/academy-logo.png" alt="Academy Logo" className=" h-[50px]" />
      </div>

      {/* Menu */}
      <div className="bg-[#D9D9D9] text-[15px] w-[365px] h-[52px] rounded-[50px] flex justify-around items-center px-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`w-[121px] h-[45px] rounded-[50px] transition-all flex justify-center items-center gap-2 ${
              active === item.name ? "bg-black text-white" : ""
            }`}
            onClick={() => setActive(item.name)}
          >
            {active === item.name && <img src={item.icon} alt={`${item.name} icon`} className="w-5 h-5" />}
            {item.name}
          </Link>
        ))}
      </div>

      {/* Talk Button */}
      <div>

        <button className="bg-bee-black w-[151px] h-[52px] text-white  flex rounded-[50px] justify-center items-center gap-2">Let's Talk <img src="/letstalk.svg" alt="" /></button>
      </div>
    </div>
  );
}

export default Header;
