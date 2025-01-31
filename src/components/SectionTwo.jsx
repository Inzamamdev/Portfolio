import React from "react";
import Skills from "./Skills";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function SectionTwo() {
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
      className="sm:mx-20 mx-5 text-black dark:text-white mb-56"
    >
      <h6 className="text-2xl font-bold text-center mb-5">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600">
          SKILLS
        </span>
      </h6>
      <h2 className="mx-auto mb-24 text-center text-3xl md:text-5xl sm:text-5xl font-bold max-w-xl">
        Your Trusted Partner in Web & AI Development
      </h2>

      <div className="grid justify-center sm:justify-normal grid-cols-2  sm:grid-cols-4 gap-4 text-white">
        <Skills />
      </div>
    </div>
  );
}
