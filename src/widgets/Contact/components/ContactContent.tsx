import React from "react";
import TitleBar from "@components/TitleBar";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TbMail } from "react-icons/tb";

export default function ContactContent() {
  return (
    <div className="lg:pt-[100px] pt-[80px] px-[5vw] flex flex-col lg:gap-10 gap-4 pb-[10vh]">
      <TitleBar title="Getting There" />
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 flex-col flex gap-6">
          <div className="">
            <span className="text-2xl font-semibold">
              How can we help you ?
            </span>
          </div>
          <div className="">
            <span className="">
              Send a message through the given form, If your enquiry is time
              sensitive Kindly refer to the contact details given below.
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center justify-start">
              <div className="p-4 bg-black-900 rounded-full">
                <IoLocationOutline className="text-2xl" />
              </div>
              <div className=" flex flex-col">
                <span className="font-semibold text-xl">Address</span>
                <span className="">Punnapra | Alappuzha-688004, Kerala</span>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-start">
              <div className="p-4 bg-black-900 rounded-full">
                <FiPhone className="text-2xl" />
              </div>
              <div className=" flex flex-col">
                <span className="font-semibold text-xl">Phone</span>
                <span className="font-sans">+91 79072 47909</span>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-start">
              <div className="p-4 bg-black-900 rounded-full">
                <TbMail className="text-2xl" />
              </div>
              <div className=" flex flex-col">
                <span className="font-semibold text-xl">Email</span>
                <span className="">scalex@carmelcet.in</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
