import React from "react";

interface TitleBarProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function TitleBar({
  title,
  subtitle,
  align = "center",
  className = "",
}: TitleBarProps) {
  return (
    <div className={`w-full flex flex-row py-4 gap-2 ${className} text-${align}`}>
      <div className="h-auto w-[10px] bg-yellow-400"></div>
      <h1 className="text-5xl font-bold text-gray-900 uppercase inline-block px-2 bg-yellow-400">
        {title}
      </h1>
      {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
    </div>
  );
}
