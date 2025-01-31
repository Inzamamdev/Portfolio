import React from "react";
import profile from "../assets/me.jpeg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Typewriter } from "react-simple-typewriter";
export default function SectionOne() {
  return (
    <div className="sm:mx-20 mx-5 text-black flex my-20 gap-16 items-center flex-wrap md:flex-nowrap dark:text-white">
      <div className=" ">
        <h1 className=" text-4xl sm:text-5xl md:text-7xl font-bold  ">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600 ">
            I build{" "}
            <span>
              <Typewriter
                words={["frontend", "backend", "fullstack"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </span>
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mx-auto">
          products that are smooth, smart, and scalable.
        </h1>
        <p className="text-gray-600 mt-5 text-2xl">
          Hi, I am Inzamam Shaikh. I help businesses turn ideas into
          high-performing websites, solve web problems, and bring Figma designs
          to life. Let’s create something amazing!
        </p>
        <div className="flex mt-5 items-center text-lg flex-wrap md:flex-nowrap">
          <button className="font-bold bg-[#ffaa2b] py-3 px-10 rounded-md w-full sm:w-auto">
            <span className="flex items-center justify-center text-white">
              My Projects <ArrowOutwardIcon className="ml-1" />
            </span>
          </button>
          <button className="font-bold sm:mx-5 bg-gray-500 py-3 px-10 rounded-md w-full sm:w-auto mt-5 sm:mt-0">
            <span className="flex items-center justify-center text-white">
              <CloudDownloadIcon className="mr-1" /> Download CV
            </span>
          </button>
        </div>
      </div>

      <img src={profile} alt="" className="rounded-full w-96 mx-auto" />
    </div>
  );
}
