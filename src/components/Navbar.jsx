import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { TbBracketsContainStart } from "react-icons/tb";
import { TbBracketsContainEnd } from "react-icons/tb";
import { toggleDarkMode } from "../features/theme/darkSlice";
export default function Navbar({
  sectionOneRef,
  sectionTwoRef,
  sectionThreeRef,
  sectionFourRef,
}) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);
  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };
  return (
    <div className="flex justify-between items-center py-5 sm:mx-20 mx-5 dark:text-white font-bold">
      <p className="text-3xl flex items-center cursor-pointer">
        <TbBracketsContainStart /> I <TbBracketsContainEnd />
      </p>
      <div className="flex items-center">
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </button>
        <ul
          className={`z-10 md:flex bg-white justify-center items-center md:gap-5 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto dark:shadow-white sm:bg-transparent p-5 md:p-0 shadow-md md:shadow-none transition-all duration-500 ${
            isOpen
              ? "md:opacity-100 md:scale-100 dark:bg-black"
              : "opacity-0 scale-95 pointer-events-none md:opacity-100 md:pointer-events-auto"
          }`}
        >
          <li
            onClick={() => scrollToSection(sectionOneRef)}
            className="px-5 py-4 md:py-0 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection(sectionTwoRef)}
            className="px-5 py-4 md:py-0 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection(sectionThreeRef)}
            className="px-5 py-4 md:py-0 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection(sectionFourRef)}
            className="px-5 py-4 md:py-0 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
          >
            Contact
          </li>
          <li className="px-5 py-4 md:py-0 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">
            <a href="https://www.upwork.com/freelancers/~018cd69dd219b9849e">
              Hire
            </a>
          </li>
        </ul>
        {darkMode ? (
          <LightModeOutlinedIcon
            onClick={handleToggle}
            className=" mx-2 cursor-pointer  "
          />
        ) : (
          <DarkModeOutlinedIcon
            onClick={handleToggle}
            className=" mx-2 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
