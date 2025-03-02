import TitleBar from "@components/TitleBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function AdvisoryBoardContent() {
  const judges = [
    {
      name: "Vignesh I",
      desgn: "Product Designer at Air India Limited",
      imgUrl: "/judges/vignesh.jpg",
      linkedin: "https://www.linkedin.com/in/vignesh-i-236818213/", // Add LinkedIn URLs
      insta: "https://www.instagram.com/artsy_.__/", // Add insta URLs
    },
    {
      name: "Kiran C K",
      desgn: "Senior Visual Designer at NetBramha",
      imgUrl: "/judges/kiran.jpg",
      linkedin: "https://www.linkedin.com/in/kiran-c-k-321a2323/",
      insta: "https://www.instagram.com/thekiranck?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // Add insta URLs
    },
    {
      name: "Gautham Reghu",
      desgn: "One of top 5 designers in India",
      imgUrl: "/judges/gautham.png",
      linkedin: "https://www.linkedin.com/in/gautham-reghu-%E2%9C%A6-a6b0a3192/",
      insta: "https://www.instagram.com/gautham_ui/", // Add insta URLs
    },
  ];

  return (
    <div className="px-[5vw] py-[10vh]">
      <TitleBar title="Advisory Board" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 py-[10vh]">
        {judges?.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-400 border-opacity-45 cursor-pointer shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="rounded-full flex border border-yellow-400 p-1">
              <Image
                src={item?.imgUrl}
                alt={item?.name}
                width={150}
                height={150}
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">{item?.name}</p>
              <p className="text-gray-600 text-sm">{item?.desgn}</p>
              {/* LinkedIn Icon */}
              <div className="flex w-full items-center justify-center gap-5">
                <Link
                  href={item?.linkedin}
                  target="_blank"
                  className="mt-3 text-blue-600 text-black-900 border hover:bg-black-950 hover:border-yellow-400 hover:text-yellow-400 transition-colors p-2 border-black-900 rounded-[5px]"
                >
                  <FaLinkedinIn size={24} className=""/>
                </Link>
                <Link
                  href={item?.insta}
                  target="_blank"
                  className="mt-3 text-blue-600 text-black-900 border hover:bg-black-950 hover:border-yellow-400 hover:text-yellow-400 transition-colors p-2 border-black-900 rounded-[5px]"
                >
                  <FaInstagram size={24} className=""/>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
