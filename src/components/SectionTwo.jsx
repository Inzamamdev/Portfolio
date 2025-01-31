import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
export default function SectionTwo() {
  const solutions = [
    "Custom Web Development",
    "Real-time Applications",
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
  ];
  return (
    <div className="sm:mx-20 mx-5 text-black dark:text-white">
      <h6 className="text-2xl font-bold text-center mb-5">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600">
          SERVICES
        </span>
      </h6>
      <h2 className="mx-auto mb-24 text-center text-3xl md:text-5xl sm:text-5xl font-bold max-w-xl">
        Your Trusted Partner in Web & AI Development
      </h2>

      <div className="flex text-black dark:text-white mx-auto gap-16 flex-wrap md:flex-nowrap ">
        <div className=" ">
          <div className="">
            <SupportAgentIcon
              sx={{ fontSize: "120px" }}
              className="text-gray-500"
            />
          </div>

          <h6 className="font-bold text-xl mt-3">Solutions Designed for You</h6>
          <p className=" text-[1.1rem] text-gray-500 my-5">
            From web development to AI-powered automation, we craft tailored
            solutions that drive growth and efficiency.
          </p>
          <ul className=" list-disc font-bold leading-loose mx-5">
            <li className="">Custom Web Development </li>
            <li>Real-time Applications</li>
            <li>Custom SaaS Development</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Fullstack Development</li>
          </ul>
        </div>
        <div>
          <div className="">
            <TerminalOutlinedIcon
              sx={{ fontSize: "120px" }}
              className="text-gray-500"
            />
          </div>

          <h6 className="font-bold text-xl mt-3">Technologies I Excel In</h6>
          <p className=" text-[1.1rem] text-gray-500 my-5">
            Building great products starts with the right tools. Here’s what I
            work with:
          </p>
          <ul className=" list-disc font-bold leading-loose mx-5">
            <li>REACT</li>
            <li>NODE</li>
            <li>EXPRESS</li>
            <li>FIREBASE</li>
            <li>MONGODB</li>
            <li>WEBSOCKET</li>
          </ul>
        </div>
        <div>
          <div className="">
            <SentimentSatisfiedOutlinedIcon
              sx={{ fontSize: "120px" }}
              className="text-gray-500"
            />
          </div>

          <h6 className="font-bold text-xl mt-3">What you can expect</h6>
          <p className=" text-[1.1rem] text-gray-500 my-5">
            I design products that go beyond aesthetics—they're shippable and
            usable:
          </p>
          <ul className=" list-disc font-bold leading-loose mx-5">
            <li className="">
              Clean and Functional: Intuitive designs that prioritize
              functionality.
            </li>
            <li>
              Device and User Friendly: Seamless experiences across all devices.
            </li>
            <li>
              Efficient and Maintainable: Code that is easy to manage and scale.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
