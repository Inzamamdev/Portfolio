import React from "react";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function SectionThree() {
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
      className="sm:mx-20 mx-5 text-black dark:text-white mb-72"
    >
      {" "}
      <h6 className="text-2xl font-bold text-center mb-5">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600">
          PROJECTS
        </span>
      </h6>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-16">
        <div>
          <h1 className="text-2xl font-bold">All Creative Works.</h1>
          <p className="text-gray-500 text-xl">
            Here's some of my projects that I have worked on.
          </p>
          <p className="text-xl mb-20">
            Explore More
            <span>
              <ArrowRightAltOutlinedIcon className="text-orange-400 ml-1" />
            </span>
          </p>

          <div className="max-w-96 sm:max-w-xl  rounded shadow-md dark:shadow-white dark:shadow-sm">
            <img
              src="/assets/arise.webp"
              alt=""
              loading="lazy"
              className="rounded-t"
            />
            <div className="flex justify-between mx-2 my-2 items-center">
              <p className="text-xl font-bold">Arise</p>
              <a href="https://arise-hazel.vercel.app/">
                {" "}
                <OpenInNewOutlinedIcon />
              </a>
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
              <p className=" py-0.5 mx-2 px-5 bg-[#1e282e] text-[#95d5fc] text-sm font-bold rounded-sm">
                React
              </p>
              <p className="py-0.5 mx-2 px-5 bg-[#111f1f] text-[green] text-sm font-bold rounded-sm">
                Node
              </p>
              <p className="py-0.5 mx-2 px-5 bg-[#111f1f] text-[green] text-sm font-bold rounded-sm">
                Express
              </p>
              <p className="py-0.5 mx-2 px-5 bg-[#00ed63] text-[#000029] text-sm font-bold rounded-sm">
                MongoDB
              </p>
              <p className="py-0.5 mx-2 px-5 bg-[#25c2a0] text-white text-sm font-bold rounded-sm">
                Socket.io
              </p>
            </div>
            <div className="mx-2">
              <div className=" mt-3 w-full h-[1px] bg-gray-600"></div>
              <p className=" py-3 text-black dark:text-gray-500">
                Arise is a productivity app where users join rooms, complete
                tasks, earn points, and track progress on leaderboards.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-96 sm:max-w-xl  rounded shadow-md dark:shadow-white dark:shadow-sm mb-20">
            <img
              src="/assets/todo.webp"
              alt=""
              loading="lazy"
              className="rounded-t"
            />
            <div className="flex justify-between mx-2 my-2 items-center">
              <p className="text-xl font-bold">Todo</p>
              <a href="https://quad-b-todo-theta.vercel.app/">
                <OpenInNewOutlinedIcon />
              </a>
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
              <p className=" py-0.5 mx-2 px-5 bg-[#1e282e] text-[#95d5fc] text-sm font-bold rounded-sm">
                React
              </p>
            </div>
            <div className="mx-2">
              <div className=" mt-3 w-full h-[1px] bg-gray-600"></div>
              <p className=" py-3 text-black dark:text-gray-500">
                I built a To-Do app in React with Redux in two days,
                implementing task management features with efficient state
                handling.
              </p>
            </div>
          </div>

          <div className="max-w-96 sm:max-w-xl  rounded shadow-md dark:shadow-white dark:shadow-sm">
            <img
              src="/assets/trust-vibes.webp"
              alt=""
              loading="lazy"
              className="rounded-t"
            />
            <div className="flex justify-between mx-2 my-2 items-center">
              <p className="text-xl font-bold">Trust Vibes</p>
              <a href="https://trust-vibes.vercel.app/">
                {" "}
                <OpenInNewOutlinedIcon />
              </a>
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
              <p className=" py-0.5 mx-2 px-5 bg-[#1e282e] text-[#95d5fc] text-sm font-bold rounded-sm">
                React
              </p>
              <p className=" py-0.5 mx-2 px-5 bg-[#ffc300] text-[#de2c00] text-sm font-bold rounded-sm">
                Firebase
              </p>
            </div>
            <div className="mx-2">
              <div className=" mt-3 w-full h-[1px] bg-gray-600"></div>
              <p className=" py-3 text-black dark:text-gray-500">
                A platform that helps small websites collect and display
                customer reviews. Users can generate feedback forms, gather
                responses, and showcase testimonials via iframes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
