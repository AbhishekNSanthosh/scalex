"use client";
import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
import Link from "next/link";

export default function AdminHeader() {

  const [previewUrl, setPreviewUrl] = useState("");

  return (
    <div className="fixed top-0 right-0 w-[85vw] h-[12vh] items-center flex flex-row justify-between px-[2vw]">
      <div className="flex-1 flex flex-col items-start">
        <span className="font-medium text-dash text-lg">
          Welcome, Abhishek Santhosh
        </span>
      </div>
      <div className="flex-1 flex items-center justify-end gap-8">
        {/* Preview Store Link */}
        {previewUrl && (
          <Link
            href={previewUrl}
            target="_blank"
            className="border border-gray-300 px-3 py-2 rounded-[15px] flex items-center gap-2"
          >
            Preview Store
          </Link>
        )}

        {/* Store URL Display with Copy Option */}
        {previewUrl && (
          <div
            className="border border-gray-300 px-3 py-2 rounded-[15px] flex items-center gap-2 cursor-pointer"
            onClick={() => navigator.clipboard.writeText(previewUrl)}
          >
            <FiCopy className="text-gray-700" />
            <span className="text-gray-700">{previewUrl}</span>
          </div>
        )}

        {/* Notification Icon */}
        <div>
          <IoIosNotificationsOutline className="text-3xl cursor-pointer text-dash " />
        </div>

        {/* Profile Icon */}
        <div>
          <IoPersonCircleOutline className="text-5xl text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
