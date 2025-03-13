"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";

export default function AdminSidebar() {
  const location = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      title: "Home",
      link: "/dashboard/home",
      icon: <FaHome className="text-[22px]" />,
    },
    {
      title: "Upload",
      link: "/dashboard/upload",
      icon: <MdOutlineFileUpload className="text-[22px]" />,
    },
    {
      title: "Settings",
      link: "/dashboard/settings",
      icon: <IoMdSettings className="text-[22px]" />,
    },
  ];

  const handleLogout = () => {
    Cookies.remove("admin_logged_in"); // Remove the authentication cookie
    setTimeout(() => {
      router.push("/"); // Redirect to login page
    }, 300);
  };

  return (
    <div className="w-[15vw] fixed left-0 h-full flex-col flex py-2">
      <div className="w-full items-center justify-center flex mt-[2vh]">
        <Image
          src={"/logo.svg"}
          alt=""
          width={1000}
          height={1000}
          className="w-[6rem]"
        />
      </div>
      <div className="mt-[8vh] w-full flex flex-col gap-1">
        {menuItems?.map((menuItem, index) => (
          <Link
            className={`flex text-gray-500 flex-row items-center gap-2 text-2xl py-2 relative w-full px-[2vw] ${
              location === menuItem?.link && "text-yellow-400 bg-black-900"
            }`}
            key={index}
            href={menuItem?.link}
          >
            {location === menuItem?.link && (
              <div className="h-full w-2 rounded-r-[20px] absolute left-0 top-0 bg-yellow-400"></div>
            )}
            <div className="flex mt-[-3px]">{menuItem?.icon}</div>
            <span className="text-[1.1rem]">{menuItem?.title}</span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col absolute bottom-4 px-4 w-full items-center justify-center gap-1 text-xs text-gray-700">
        <button
          onClick={() => {
            handleLogout();
          }}
          className="bg-[#ff0000] bg-opacity-50 w-full py-3 rounded-lg text-white text-sm flex items-center justify-center gap-2"
        >
          <CiLogout className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
}
