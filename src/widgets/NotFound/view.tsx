import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center text-center gap-6 px-5 pt-[80px] mb-[5vh]">
        {/* Not Found Image */}
        <Image
          src="/notfound.svg"
          alt="Page Not Found"
          width={1000}
          height={1000}
          className="w-full max-w-xs md:max-w-lg"
        />
        
        {/* Message */}
        <p className="text-lg text-white/80">Oops! The page you're looking for doesn't exist.</p>

        {/* Go Home Button */}
        <Link href="/" passHref>
          <button className="bg-yellow-400 rounded-lg px-4 py-2 text-black-950 font-semibold transition-all duration-300 hover:bg-yellow-500 hover:scale-105">
            Go to Home
          </button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
