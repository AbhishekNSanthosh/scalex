import { navItems } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterContent() {

  return (
    <footer className="md:p-[2vw] lg:p-[2vw] p-[0] w-full bg-black-950">
      <div className="w-full md:p-10 lg:p-10 p-5 bg-yellow-400 rounded-md flex flex-col justify-start items-center gap-5">
        {/* Logo Section */}
        <div className="flex w-full md:flex-row lg:flex-row flex-col gap-10 md:gap-0 lg:gap-0 items-start justify-between">
          <div className="flex flex-col items-start md:items-start flex-[2]">
            <Image
              src={"/footer.svg"}
              height={1000}
              width={1000}
              alt="Obcyfest Logo"
              className="w-[200px] mb-4"
            />
           <p className="text-black-950 text-sm md:text-base font-medium mt-3">
           "Where Creativity Meets Scalable Innovation”
</p>
<p className="text-sm text-gray-800 lg:w-[30vw] mt-2">
  Join us in shaping the future of design and user experience. Stay updated on 
  our upcoming challenges, workshops, and networking opportunities!
</p>

          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>
            <ul className="md:space-y-2 lg:space-y-2 space-y-2 text-sm text-gray-800">
              {navItems.map((item, index) => (
                <li key={index}>
                  {"->"}{" "}
                  <Link
                    href={`${item.link}`}
                    className="hover:text-black transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start md:items-start justify-start flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Us
            </h3>
            <p className="text-sm text-gray-800">
              Carmel College of Engineering and Technology,
              <br />
              Punnapra | Alappuzha-688004, Kerala
              <br />
            </p>
            <Link
              href="mailto:obcyfest@carmelcet.in"
              className="hover:text-black-950 text-gray-800 transition-colors mt-4"
            >
              obcyfest@carmelcet.in
            </Link>
            <Link
              href="https://wa.me/+917907247909" target="_blank"
              className="hover:text-black-950 text-gray-800 transition-colors mt-4"
            >
             +91 7907247909
            </Link>
          </div>
        </div>

        {/* Bottom Footer Text */}
        <div className="h-[0.5px] w-[100%] bg-black-950 mt-5"></div>
        <div className="flex justify-between items-center md:flex-row lg:flex-row flex-col-reverse mt-4 text-black-950 text-sm w-full gap-2">
          <div className="">
            Made with 🖤 by Tech Team | Obcydians.
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} scaleX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}