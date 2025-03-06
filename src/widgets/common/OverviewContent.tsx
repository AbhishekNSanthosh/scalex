"use client";
import TitleBar from "@components/TitleBar";
import Image from "next/image";
import React, { useState } from "react";

export default function OverviewContent() {
  const aboutus = [
    {
      title: "About CCET",
      img: "/carmel.png",
      content:
        "Carmel College of Engineering & Technology (CCET) is committed to fostering innovation, knowledge, and creativity. With a strong emphasis on research and practical learning, CCET provides students with the skills and resources to excel in their respective fields. The institution is dedicated to nurturing future leaders through academic excellence, industry collaborations, and hands-on experience.",
    },
    {
      title: "About Department of CSE",
      img: "/dep.webp",
      content:
        "The Department of Computer Science & Engineering at CCET is a hub of technological innovation and learning. With a curriculum designed to keep pace with industry advancements, the department empowers students with cutting-edge knowledge in software development, artificial intelligence, cybersecurity, and more. Through workshops, hackathons, and industry interactions, students gain hands-on experience and exposure to real-world challenges.",
    },
    {
      title: "About scaleX",
      img: "/logo.svg",
      content:
        "ScaleX is a UI/UX product design hackathon that brings together creative minds to innovate, collaborate, and redefine user experience and interface design. It provides a platform for designers, developers, and problem-solvers to create intuitive, user-centric, and impactful digital solutions. ScaleX challenges innovators to redefine usability, beauty, and functionality while nurturing creativity and practical problem-solving. By uniting skilled people from various backgrounds, ScaleX fosters product design innovation, challenging participants to create solutions that improve digital interactions and make everyday user experiences better. It is a place where ideas become reality.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex px-[5vw] flex-col w-full gap-5 h-auto md:py-[15vh] lg:py-[15vh] py-8 lg:mt-0">
      <TitleBar title="Overview" />
      <div className="flex">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            {aboutus.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 transition-colors duration-200 ${
                  activeTab === index
                    ? "bg-yellow-400 text-black-950"
                    : "bg-transparent text-gray-500"
                }`}
              >
                {item.title}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-5">
              <h2 className="text-2xl font-bold">{aboutus[activeTab].title}</h2>
              <p className="mt-2 text-gray-500">{aboutus[activeTab].content}</p>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-[90%] bg-yellow-400 hidden md:flex lg:flex"></div>
        {/* Right Column - Content */}
        <div className="flex-1 p-4 items-center justify-center w-full hidden md:flex lg:flex">
          <Image
            src={aboutus[activeTab].img}
            alt="About Image"
            width={1500}
            height={1500}
            className="w-[20rem] h-[20rem]"
          />
        </div>
      </div>
    </div>
  );
}
