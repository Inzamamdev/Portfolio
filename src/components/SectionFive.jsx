import React from "react";

export default function SectionFive() {
  return (
    <div className="sm:mx-20 mx-5 text-black dark:text-white  text-center mb-5">
      <p className="">Designed and Developed by Inzamam Shaikh.</p>
      <p>
        Built with{" "}
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600 ">
          React.js
        </span>
        ,
        <span className=" bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600">
          Tailwind
        </span>{" "}
        & Material UI. Hosted on{" "}
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 bg-clip-text text-transparent to-red-600">
          Github Pages.
        </span>
      </p>
    </div>
  );
}
