import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node",
    "Express",
    "Mongodb",
    "Socket.io",
    "Firebase",
    "VS Code",
    "Github",
    "Hostinger",
    "Digital Ocean",
    "Rest Api",
    "Docker",
    "Redux",
  ];
  return (
    <>
      {skills.map((item, index) => (
        <div
          key={index}
          className="transition-all duration-300 hover:bg-[#ffaa2b10] hover:border-[#ffaa2b] hover:text-[#ffaa2b] bg-[#1e282e] dark:bg-[#181a1c] text-2xl text-center py-8 max-w-56 my-auto rounded-xl border-2 border-black dark:border-gray-200"
        >
          {item}
        </div>
      ))}
    </>
  );
}
