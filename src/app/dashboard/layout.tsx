"use client";
import AdminHeader from "@components/AdminHeader";
import AdminSidebar from "@components/AdminSidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex items-center flex-row w-screen">
        <AdminSidebar />
        <div className="flex flex-col w-full">
          <AdminHeader />
          <main className="min-h-[100vh] h-auto rounded-[5px] pt-[12vh] pl-[17vw] pr-[0] pb-[1vw] w-[99.5vw] flex ">
            <div className="w-full h-[85vh] relative overflow-auto pr-4 bg-gray-200 bg-opacity-5">
              {children}
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
