import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionOne() {
  gsap.registerPlugin(ScrollTrigger);

  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: -70 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // Animation starts when the section is more visible
          toggleActions: "play none none none", // Plays once on scroll into view
        },
      }
    );
  }, []);
  return (
    <div
      ref={boxRef}
      className="sm:mx-20 mx-5 text-black flex my-20 gap-16 items-center flex-wrap md:flex-nowrap dark:text-white mb-40"
    >
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
          <button className="font-bold bg-[#ffaa2b] py-3 px-10 rounded-md w-full sm:w-auto hover:cursor-pointer">
            <span className="flex items-center justify-center text-white ">
              My Projects{" "}
              <ArrowOutwardIcon className="transition-all duration-300 ml-1 hover:rotate-45" />
            </span>
          </button>
          <button className="font-bold sm:mx-5 bg-gray-500 py-3 px-10 rounded-md w-full sm:w-auto mt-5 sm:mt-0 hover:cursor-pointer">
            <span className="flex items-center justify-center text-white">
              <CloudDownloadIcon className="mr-1" />
              <a
                href="/inzamamresume_v1.pdf"
                download="Inzamam_Shaikh_Resume.pdf"
              >
                Download CV
              </a>
            </span>
          </button>
        </div>
      </div>

      <img
        src="../assets/me.jpeg"
        alt=""
        className="rounded-full w-96 mx-auto"
      />
    </div>
  );
}
