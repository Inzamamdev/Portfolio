import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";

export default function SectionFour() {
  return (
    <div className="sm:mx-20 mx-5 text-black dark:text-white text-center text-[1rem] mb-40">
      <h1 className="text-5xl font-bold">Keep In Touch.</h1>
      <p className=" text-gray-500 my-10">
        Ready to create something amazing? Let's hop on a call.
      </p>
      <div className="flex items-center justify-center font-bold text-white ">
        <span className="flex items-center bg-[#141414] py-1.5 px-5 rounded-md">
          <RxLinkedinLogo fontSize={18} className=" mr-1" /> LinkedIn
        </span>
        <span className="flex items-center mx-5 bg-[#141414] py-1.5 px-5 rounded-md">
          <MdEmail fontSize={20} className=" mr-1" /> Email
        </span>
        <span className="flex items-center bg-[#141414] py-1.5 px-5 rounded-md">
          <SiReaddotcv fontSize={20} className=" mr-1" /> Resume
        </span>
      </div>
    </div>
  );
}
