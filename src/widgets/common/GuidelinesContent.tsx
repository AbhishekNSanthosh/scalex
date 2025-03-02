import TitleBar from "@components/TitleBar";
import React from "react";

export default function GuidelinesContent() {
  const guidelines = [
    { title: "Team Size", description: "Each team must consist of exactly three members." },
    { title: "Duration", description: "The competition will run for 6 hours, focusing on intense design challenges." },
    { title: "Submission", description: "Participants must submit a working prototype. A presentation is required only if shortlisted." }, 
    { title: "Judging Criteria", description: "Entries will be evaluated based on creativity, usability, user experience, and visual design." },
  ];

  return (
    <div className="px-[5vw] py-[10vh] bg-black text-white min-h-screen flex flex-col items-center">
      {/* Title Bar */}
      <TitleBar title="Guidelines" />

      {/* Guidelines List */}
      <ul className="mt-10 space-y-6 max-w-2xl">
        {guidelines.map((item, index) => (
          <li
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 shadow-lg"
          >
            <h2 className="text-yellow-400 text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-lg">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
