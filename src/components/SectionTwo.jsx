import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import Skills from "./Skills";
export default function SectionTwo() {
  return (
    <div className="sm:mx-20 mx-5 text-black dark:text-white mb-20">
      <h6 className="text-2xl font-bold text-center mb-5">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600">
          SERVICES
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
