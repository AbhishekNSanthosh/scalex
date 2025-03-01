"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { title: "Overview", link: "" },
    { title: "Timeline", link: "" },
    { title: "Advisory Board", link: "" },
    { title: "Guidelines", link: "" },
    { title: "Contact", link: "" },
  ];

  console.log(isScrolled)
  return (
    <div
      className={`px-[3vw] h-[13vh] flex items-center justify-between fixed w-screen  z-[100] ${
        isScrolled ? "backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      style={{ backdropFilter: isScrolled ? "blur(10px)" : "none" }}
    >
      <Image
        src={"/logo.svg"}
        alt="Logo"
        height={1000}
        width={1000}
        className="w-[7rem]"
      />
      <div className="flex flex-row items-center gap-[4vw] justify-between">
        {menu?.map((item, index) => (
          <div key={index}>
            <Link className="capitalize font-medium text-white" href={item?.link}>
              {item?.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button className="px-3 py-2 text-yellow-400 font-medium rounded-[8px] flex items-center justify-center gap-3">
          Register
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
