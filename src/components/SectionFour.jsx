import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function SectionFour() {
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
      className="sm:mx-20 mx-5 text-black dark:text-white text-center text-[1rem] mb-40"
    >
      <h1 className="text-5xl font-bold">Keep In Touch.</h1>
      <p className=" text-gray-500 my-10">
        Ready to create something amazing? Let's hop on a call.
      </p>
      <div className="flex items-center justify-center font-bold text-white sm:mx-20 mx-5">
        <a href="https://www.linkedin.com/in/inzamam-shaikh-189678284/">
          {" "}
          <span className="flex items-center bg-[#141414] py-1.5 px-5 rounded-md">
            <RxLinkedinLogo fontSize={18} className=" mr-1" /> LinkedIn
          </span>
        </a>
        <a href="mailto:sinzamam429@gmail.com">
          {" "}
          <span className="flex items-center mx-5 bg-[#141414] py-1.5 px-5 rounded-md">
            <MdEmail fontSize={20} className=" mr-1" /> Email
          </span>
        </a>
      </div>
    </div>
  );
}
