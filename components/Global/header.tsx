"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#", icon: "/home.svg" },
    { name: "About", href: "#", icon: "/about.svg" },
    { name: "Course", href: "#", icon: "/course.svg" },
  ];

  return (
    <div className="flex justify-between items-center px-6 md:px-[110px] py-5 bg-transparent absolute left-0 right-0 w-full">
      {/* Logo */}
      <div>
        <Link href={"#"}>
          <Image
            src="/academy-logo.png"
            alt="Academy Logo"
            className="h-[40px] md:h-[50px] cursor-pointer"
            width={120}
            height={50}
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden font-k2d md:flex bg-[#D9D9D9] text-[15px] font-[400] w-[365px] h-[52px] rounded-[50px] justify-around items-center px-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`w-[121px] h-[45px] rounded-[50px] transition-all flex justify-center items-center gap-2 ${
              active === item.name ? "bg-black text-white" : ""
            }`}
            onClick={() => setActive(item.name)}
          >
            {active === item.name && (
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-5 h-5"
                width={20}
                height={20}
              />
            )}
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button with Image */}
      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <Image
          src={menuOpen ? "/close-icon.svg" : "/menu-icon.svg"}
          alt="Menu Icon"
          width={34}
          height={34}
          className="w-10 h-10"
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-white shadow-lg flex flex-col items-center gap-4 py-4 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="w-full text-center py-2 text-lg font-medium"
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Talk Button */}
      <div className="hidden md:flex">
        <button className="bg-bee-black font-k2d w-[151px] h-[52px] text-white flex rounded-[50px] justify-center items-center gap-2">
          Lets Talk <Image src="/letstalk.svg" width={16} height={16} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header;
