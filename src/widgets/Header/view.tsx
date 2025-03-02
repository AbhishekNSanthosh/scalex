"use client";
import { navItems } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <div
        className={`px-[5vw] h-[10vh] lg:h-[13vh] flex items-center justify-between fixed w-screen  z-[100] ${
          isScrolled ? "backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
        style={{ backdropFilter: isScrolled ? "blur(10px)" : "none" }}
      >
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            height={1000}
            width={1000}
            className="w-[7rem]"
          />
        </Link>
        <div className="flex-1 flex md:flex lg:hidden items-center justify-end">
          <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <BsGrid3X3Gap className="text-2xl text-yellow-400" />
          </button>
        </div>
        <div className="lg:flex hidden flex-row items-center gap-[4vw] justify-between">
          {navItems?.map((item, index) => (
            <div key={index}>
              <Link
                className="capitalize font-medium text-white"
                href={item?.link}
              >
                {item?.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex">
          <button className="px-3 py-2 text-yellow-400 font-medium rounded-[8px] flex items-center justify-center gap-3">
            Register
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div
          className={`fixed inset-0 z-[110] transform transition-transform duration-500 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
              isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="absolute right-0 top-0 h-full w-[80%] sm:w-[60%] bg-black-950 shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-yellow-400">Menu</span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems?.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <Link
                    href={item?.link}
                    className="capitalize flex items-center gap-2 w-full justify-between border-b border-black-900 py-3"
                  >
                    {item?.title}
                    <IoIosArrowForward/>
                  </Link>
                </div>
              ))}
            </nav>
            <div className="mt-8">
              <Link
                href={"https://forms.gle/VWgA4t2jr1esEkLcA"}
                target="_blank"
              >
                <button className="w-full px-4 py-2 rounded-md bg-yellow-400 text-black-950 font-medium hover:bg-primary-700 transition-colors">
                  Register
                </button>
              </Link>
            </div>
            <div className="py-2 flex flex-col lg:flex-row w-full items-center justify-center absolute bottom-3 self-center">
              <div className="flex-1 flex items-center justify-between font-semibold text-sm text-gray-700">
                <span className="">2025 © scaleX</span>
              </div>
              <div className="flex-1 flex items-center lg:justify-end text-sm font-semibold text-gray-700">
                All rights reserved
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
